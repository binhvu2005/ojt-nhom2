<template>
    <div :class="$style.ngK">
      <div :class="$style.content">
        <div :class="$style.loginForm">
          <div :class="$style.title">
            <img :class="$style.logoIcon" alt="" src="../../../public/image/logo.png" />
            <div :class="$style.ngKParent">
              <b :class="$style.ngK1">Đăng ký</b>
              <div :class="$style.cngPhtTrin">Cùng phát triển con đường sự nghiệp với Rikkei Jobs</div>
            </div>
          </div>
          <div :class="$style.emailPassWrapper">
            <div :class="$style.emailPass">
              <div :class="$style.inputField">
                <div :class="$style.inputWithLabel">
                  <div :class="$style.label">Email</div>
                  <div :class="$style.input">
                    <div :class="$style.content1">
                      <img :class="$style.smsIcon" alt="" src="../../../public/sms.svg" />
                      <div :class="$style.text">you@company.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div :class="$style.inputField">
                <div :class="$style.inputWithLabel">
                  <div :class="$style.label">Mật khẩu</div>
                  <div :class="$style.input1">
                    <div :class="$style.content1">
                      <img :class="$style.smsIcon" alt="" src="../../../public/lock.svg" />
                      <div :class="$style.text">**********</div>
                    </div>
                    <img :class="$style.eyeSlashIcon" alt="" src="../../../public/eye-slash.svg" />
                  </div>
                </div>
              </div>
              <div :class="$style.inputField">
                <div :class="$style.inputWithLabel">
                  <div :class="$style.label">Xác nhận mật khẩu</div>
                  <div :class="$style.input1">
                    <div :class="$style.content1">
                      <img :class="$style.smsIcon" alt="" src="../../../public/lock.svg" />
                      <div :class="$style.text">**********</div>
                    </div>
                    <img :class="$style.eyeSlashIcon" alt="" src="../../../public/eye-slash.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.buttonGroup">
            <div :class="$style.button">
              <div :class="$style.buttonBase">
                <b :class="$style.text3">Đăng ký</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img :class="$style.imgIcon" alt="" src="../../../public/image/anh-dang-nhap.png" />
      <img :class="$style.decorIcon" alt="" src="../../../public/decor.svg" />
    </div>
  </template>
  
  <script setup lang="ts">
  // Đoạn mã `script setup` không cần thêm bất kỳ khai báo gì nếu không có logic cụ thể
  </script>
  
  <style module>
  
  
  .content{
    width: 500px;
  }
  .logoIcon {
    width: 138px;
    position: relative;
    height: 32px;
  }
  .ngK1 {
    position: relative;
    line-height: 40px;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .cngPhtTrin {
    align-self: stretch;
    position: relative;
    font-size: 16px;
    line-height: 24px;
    color: #505050;
    text-align: left;
  }
  .ngKParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
  }
  .title {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 48px;
    text-align: center;
    text-align: left;
    margin-bottom: 20px;
  }
  .label {
    position: relative;
    line-height: 20px;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 4px;
  }
  
  .smsIcon {
    width: 20px;
    position: relative;
    height: 20px;
  }
  .text {
    flex: 1;
    position: relative;
    line-height: 24px;
  }
  .content1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }
  .input {
    align-self: stretch;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #b5b5b5;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 24px;
    font-size: 16px;
    color: #919191;
  }
  .inputWithLabel {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 6px;
  }
  .inputField {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 16px;
  }
  .eyeSlashIcon {
    width: 16px;
    position: relative;
    height: 16px;
  }
  .input1 {
    align-self: stretch;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #b5b5b5;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 24px;
    gap: 8px;
    font-size: 16px;
    color: #919191;
  }
  .emailPass {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
  }
  .emailPassWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 14px;
    color: #3d3d3d;
  }
  .text3 {
    position: relative;
    line-height: 24px;
  }
  .buttonBase {
    flex: 1;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    background-color: #bc2228;
    border: 1px solid #bc2228;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
  }
  .button {
    align-self: stretch;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f2f4f7;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  
  }
  .ngK2 {
    position: relative;
    width: 100%;
    line-height: 24px;
    color: #bc2228;
  }
  .signUp {
    display: none;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;

  }
  .buttonGroup {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    font-size: 16px;
    color: #fff;
  }
  
  .content {
    position: absolute;
    top: calc(50% - 259px);
    left: 120px;
    padding: 4rem;
    width: Fixed (481px)px;
  height: Hug (518px)px;
  top: 170px;
  left: 200px;
  opacity: 0px;

  }
  .imgIcon {
    position: absolute;
    right: -0.4px;
    height: 100vh;
    overflow: hidden;
    object-fit: contain;
    width: 50%;
    object-fit: cover;
  
  
  }
  .decorIcon {
    position: relative;
    width: 500px;
    height: 400px;
    gap: 0px;
    opacity: 0px;
  }
  .ngK {
    width: 100%;
    position: relative;
    background-color: #fff;
    height: 960px;
    overflow: hidden;
    text-align: left;
    font-size: 32px;
    color: #000;
    font-family: 'SF Pro Display';
  }
 
  
  .ngK {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    font-family: 'SF Pro Display', sans-serif;
  }
  

  .loginForm {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .emailPassWrapper {
    width: 100%;
    margin-bottom: 20px;
  }
  </style>
  