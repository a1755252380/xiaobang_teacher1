import socket
import time
COD = 'utf-8'
HOST = '10.10.226.71'  # 主机ip
PORT = 60000  # 软件端口号
BUFSIZ = 64960   # 设定一次可接多少字节
ADDR = (HOST, PORT)
SIZE = 10
tcpS = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # 创建socket对象

tcpS.bind(ADDR)  # 绑定ip端口号
tcpS.listen(SIZE)  # 设置最大链接数

def main():
    while True:
        print("服务器启动，监听客户端链接")
        conn, addr = tcpS.accept()
        print("链接的客户端", addr)
        while True:
            try:
                data = conn.recv(BUFSIZ)  # 读取已链接客户的发送的消息,设定一次接多少字节
            except Exception as e:
                print("断开的客户端", addr)
                break
            print("客户端发送的内容:", data.decode(COD))
            if not data:
                break
            msg = '吹啊吹啊我的骄傲放纵'  # 获取结构化事件戳
            # msg1 = '[%s]:%s' % (msg, data.decode(COD))
            msg1 = '[%s]:%s' % (msg, data.decode(COD))
            conn.send(msg.encode(COD))  # 发送消息给已链接客户端
            print(f'已发送{msg}')
            # print(msg1)
        conn.close()  # 关闭客户端链接

    tcpS.closel()

if __name__ == '__main__':
    main()