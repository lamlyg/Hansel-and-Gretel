# 해외 과자 구매 쇼핑몰 'Hansel and Gretel'
2020 소프트웨어공학 3차 프로젝트 (쇼핑몰 웹 어플리케이션) <br />
- 팀장 2017202085 이윤지 (lamlyg)
- 팀원 2017202093 최유림 (ChoiYuLim)
- Project execution period : 2020.06.01~2020.06.19 <br/>

<br/>


## Development Environment
### OS 
- Windows 10
### Client
- JavaScript
- ReactJS
- NodeJS
- Express
- MongoDB

## API
- Paypal (https://developer.paypal.com/docs/api/overview/)
<br/>

## Installation
1. package.json이 있는 상위폴더에서 <br/>
```sh
npm install
```
에러시, <br/>
```sh
npm install --global --production windows-build-tools
```

2. cd client <br/>
```sh
npm install
```

3. server > config > dev.js 추가 <br/>
추가 후, mongoDB URL 코드 추가 <br/>

cd .. <br/>


4. dropzone 설치 <br/>
```sh
npm install react-dropzone --save
```

5. multer 설치 <br/>
```sh
npm install --save multer
```

6. React-image-gallery <br/>
```sh
npm install react-image-gallery
```


7. Paypal download <br/>
```sh
npm install --save react-paypal-express-checkout
```


## Application Architecture
- [Page design by function](https://github.com/lamlyg/Hansel-and-Gretel/wiki/Page-design-by-function)
- [REST API design](https://github.com/lamlyg/Hansel-and-Gretel/wiki/REST-API-design)

## Database Diagram
![image](https://user-images.githubusercontent.com/33417495/88052200-dbb6a580-cb94-11ea-88ad-3f76439a4a13.png)


## UI
### HOME

![image](https://user-images.githubusercontent.com/33417495/88050005-0999eb00-cb91-11ea-8539-921b4c7b2263.png)

### JOIN & LOGIN

![image](https://user-images.githubusercontent.com/33417495/88050103-2f26f480-cb91-11ea-87ff-a9123213f9d7.png)

![image](https://user-images.githubusercontent.com/33417495/88050113-33531200-cb91-11ea-9f7d-092f652b6fdd.png)

![image](https://user-images.githubusercontent.com/33417495/88050114-351cd580-cb91-11ea-850a-19da1447f543.png)

![image](https://user-images.githubusercontent.com/33417495/88050123-38b05c80-cb91-11ea-8559-cb922f0dc521.png)

![image](https://user-images.githubusercontent.com/33417495/88050128-3c43e380-cb91-11ea-9b31-6cb4b686e968.png)

![image](https://user-images.githubusercontent.com/33417495/88050135-3f3ed400-cb91-11ea-86c8-12dfaba4ae88.png)


### Member information inquiry
- 구매자 (Buyer)
![image](https://user-images.githubusercontent.com/33417495/88050234-67c6ce00-cb91-11ea-84ff-8589f2c27e5e.png)

- 관리자 및 판매자 (Manager & Seller)
![image](https://user-images.githubusercontent.com/33417495/88050280-7e6d2500-cb91-11ea-917f-63a5c4c27cae.png)


### Product registration (seller)
![image](https://user-images.githubusercontent.com/33417495/88050341-9d6bb700-cb91-11ea-99f3-2ec9d63e316e.png)

![image](https://user-images.githubusercontent.com/33417495/88050351-a2c90180-cb91-11ea-8522-bccdb78700d1.png)

![image](https://user-images.githubusercontent.com/33417495/88050356-a492c500-cb91-11ea-9b51-05e5ca0108ae.png)

### Sales Status (seller)
![image](https://user-images.githubusercontent.com/33417495/88050404-b83e2b80-cb91-11ea-93d6-06b04d3c61ee.png)


### Product inquiry 
![image](https://user-images.githubusercontent.com/33417495/88050427-cb50fb80-cb91-11ea-877a-0b432bf5de99.png)

![image](https://user-images.githubusercontent.com/33417495/88050446-d6a42700-cb91-11ea-97be-d8a6d5206b26.png)

### Product reviews

![image](https://user-images.githubusercontent.com/33417495/88050453-da37ae00-cb91-11ea-92f2-db4b4ba0b01b.png)

### Purchase & Check purchase history

![image](https://user-images.githubusercontent.com/33417495/88050522-f6d3e600-cb91-11ea-9ce4-a5a9a990477a.png)

![image](https://user-images.githubusercontent.com/33417495/88050524-f89da980-cb91-11ea-9c29-296ba42286b0.png)

![image](https://user-images.githubusercontent.com/33417495/88050529-fb000380-cb91-11ea-87fd-26aa1af519d7.png)

![image](https://user-images.githubusercontent.com/33417495/88050532-fcc9c700-cb91-11ea-9dbe-2e2774a4d3b9.png)

![image](https://user-images.githubusercontent.com/33417495/88050542-ff2c2100-cb91-11ea-9746-9a42038d51d3.png)

![image](https://user-images.githubusercontent.com/33417495/88050547-02bfa800-cb92-11ea-8d30-3fdb17681bef.png)


### Recommended products
![image](https://user-images.githubusercontent.com/33417495/88050968-ce98b700-cb92-11ea-99bc-6130d24b2c3c.png)


### Best products
![image](https://user-images.githubusercontent.com/33417495/88050974-d0627a80-cb92-11ea-8c63-de7ea71f519b.png)

### New products
![image](https://user-images.githubusercontent.com/33417495/88051012-e2441d80-cb92-11ea-84e9-bd5e7a2e31a7.png)

### Search 
![image](https://user-images.githubusercontent.com/33417495/88051033-ee2fdf80-cb92-11ea-8736-9d35fd09dd06.png)

### Filter 01 (by Category)
![image](https://user-images.githubusercontent.com/33417495/88051061-f8ea7480-cb92-11ea-96b8-90cb85a3e1e5.png)


### Filter 02 (by CheckBox)
![image](https://user-images.githubusercontent.com/33417495/88051884-5b904000-cb94-11ea-8ff5-3f3b07761a53.png)


### Slider in Product images
![image](https://user-images.githubusercontent.com/33417495/88051936-6d71e300-cb94-11ea-8686-44ae090cea16.png)

### Cart
![image](https://user-images.githubusercontent.com/33417495/88051986-837fa380-cb94-11ea-95d0-1fb566663967.png)


## Result
[Demo](https://www.youtube.com/watch?v=MoHFqOXtMIs&feature=youtu.be)


