# Hướng dẫn chạy JSON Server 
(https://github.com/typicode/json-server)
## Cài đặt
Đầu tiên vào thư mục backend

Chạy lệnh sau trong terminal để cài đặt `json-server`:

```bash
npm install json-server
```

## File db.json
Tạo một file db.json trong thư mục gốc của dự án.

Trong file db.json hiện giờ đang là ví dụ về cấu trúc file.

## Cách chạy JSON Server
Sử dụng câu lệnh:

```bash
json-server --watch db.json
```
Khi chạy thì JSON Server sẽ mặc định khởi động server ở cổng https://localhost:3000

Nếu muốn chạy ở cổng khác thì có thể thêm ```--port``` vào sau câu lệnh.

Ví dụ nếu muốn chạy trên cổng 8000:

```bash
json-server --watch db.json --port 8000
```

