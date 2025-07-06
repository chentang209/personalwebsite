# 部署指南

本指南将帮助您将网站部署到自己的服务器上。

## 前提条件

1. 一台运行 Linux 的服务器（如 Ubuntu 20.04+）
2. 服务器上已安装 Node.js 18+ 和 npm
3. 服务器上已安装 Nginx 或 Apache
4. 一个域名（可选，但推荐）

## 部署步骤

### 1. 构建项目

在本地开发环境中，运行以下命令构建项目：

```bash
# 安装依赖
npm install

# 构建项目并导出静态文件
npm run build
```

这将在项目根目录下生成一个 `out` 文件夹，包含所有静态文件。

### 2. 准备服务器

#### 安装 Nginx

如果您的服务器上还没有安装 Nginx，可以运行以下命令安装：

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx

# CentOS/RHEL
sudo yum install epel-release
sudo yum install nginx
```

#### 配置 Nginx

创建一个新的 Nginx 配置文件：

```bash
sudo nano /etc/nginx/sites-available/your-domain.com
```

添加以下配置（替换 `your-domain.com` 为您的域名或服务器IP）：

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    root /var/www/your-domain.com;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

启用站点配置：

```bash
sudo ln -s /etc/nginx/sites-available/your-domain.com /etc/nginx/sites-enabled/
sudo nginx -t  # 测试配置
sudo systemctl restart nginx
```

### 3. 上传文件到服务器

使用 `rsync` 或 SCP 将 `dist` 文件夹中的内容上传到服务器的 web 根目录：

```bash
# 创建网站目录
ssh user@your-server-ip "mkdir -p /var/www/your-domain.com"

# 上传文件
rsync -avz --progress ./dist/ user@your-server-ip:/var/www/your-domain.com/

# 设置正确的权限
ssh user@your-server-ip "chown -R www-data:www-data /var/www/your-domain.com"
```

### 4. 配置 HTTPS（推荐）

使用 Let's Encrypt 获取免费 SSL 证书：

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# 设置自动续期
sudo certbot renew --dry-run
```

### 5. 配置自动部署（可选）

您可以设置一个简单的 CI/CD 流程来自动化部署过程。例如，使用 GitHub Actions：

1. 在项目根目录创建 `.github/workflows/deploy.yml` 文件
2. 添加以下内容：

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install Dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Export
        run: npm run export
        
      - name: Deploy to Server
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.SERVER_IP }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          source: "./dist/*"
          target: "/var/www/your-domain.com/"
          strip_components: 1
          
      - name: Restart Nginx
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_IP }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            sudo chown -R www-data:www-data /var/www/your-domain.com
            sudo systemctl restart nginx
```

### 6. 访问网站

现在您应该可以通过浏览器访问您的网站了：
- `http://your-server-ip` 或
- `https://your-domain.com`（如果您配置了域名和SSL）

## 常见问题

### 1. 网站显示空白
- 确保所有资源路径都正确（检查浏览器开发者工具中的控制台）
- 确保 `basePath` 在 `next.config.js` 中正确设置

### 2. 图片不显示
- 确保图片路径正确
- 检查 `next.config.js` 中的 `images.unoptimized` 设置

### 3. 路由问题
- 确保 Nginx 配置中包含 `try_files $uri $uri/ /index.html;` 来处理客户端路由

## 维护

### 更新网站
1. 在本地进行更改并测试
2. 提交更改到 Git
3. 运行 `npm run deploy` 或推送更改到 GitHub（如果设置了 CI/CD）

### 监控
- 设置服务器监控（如 Uptime Robot）
- 配置日志轮转：
  ```bash
  sudo nano /etc/logrotate.d/nginx
  ```

## 安全建议

1. 保持系统和软件包更新
2. 使用强密码和 SSH 密钥认证
3. 配置防火墙（如 UFW）
   ```bash
   sudo ufw allow 'Nginx Full'
   sudo ufw allow 'OpenSSH'
   sudo ufw enable
   ```
4. 定期备份网站文件和数据库（如果有）

## 性能优化

1. 启用 Gzip 压缩（在 Nginx 配置中）
2. 配置浏览器缓存头
3. 使用 CDN 加速静态资源
4. 优化图片和其他媒体文件

## 故障排除

### 检查 Nginx 错误日志
```bash
sudo tail -f /var/log/nginx/error.log
```

### 检查 Nginx 访问日志
```bash
sudo tail -f /var/log/nginx/access.log
```

### 检查 Nginx 配置
```bash
sudo nginx -t
```

如果需要更多帮助，请参考 [Next.js 部署文档](https://nextjs.org/docs/deployment) 或 [Nginx 文档](https://nginx.org/en/docs/)。
