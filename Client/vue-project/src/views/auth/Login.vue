<template>
    <div :class="$style.ngNhp">
      <img :class="$style.decorIcon" alt="" src="../../../public/decor.svg" />
      <div :class="$style.content">
        <div :class="$style.loginForm">
          <div :class="$style.title">
            <img :class="$style.logoIcon" alt="" src="../../../public/image/logo.png" />
            <div :class="$style.ngNhpParent">
              <b :class="$style.ngNhp1">Đăng nhập</b>
              <div :class="$style.cngPhtTrin">
                Cùng phát triển con đường sự nghiệp với Rikkei Jobs
              </div>
            </div>
          </div>
          <div :class="$style.emailPassParent">
            <div :class="$style.emailPass">
              <div :class="$style.inputField">
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
              </div>
              <div :class="$style.inputField">
                <div :class="$style.inputField">
                  <div :class="$style.inputWithLabel">
                    <div :class="$style.label">Mật khẩu</div>
                    <div :class="$style.input1">
                      <div :class="$style.content1">
                        <img :class="$style.smsIcon" alt="" src="../../../public/lock.svg" />
                        <div :class="$style.text">**********</div>
                      </div>
                      <img
                        :class="$style.eyeSlashIcon"
                        alt=""
                        src="../public/eye-slash.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div :class="$style.remember">
              <div :class="$style.checkbox">
                <div :class="$style.checkbox1">
                  <div :class="$style.checkboxBase" />
                </div>
                <div :class="$style.text2">Ghi nhớ đăng nhập</div>
              </div>
              <div :class="$style.qunMtKhu">Quên mật khẩu?</div>
            </div>
          </div>
          <div :class="$style.buttonGroup">
            <div :class="$style.button">
              <div :class="$style.buttonBase">
                <b :class="$style.text2">Đăng nhập</b>
              </div>
            </div>
            <div :class="$style.signUp">
              <div :class="$style.text2">Bạn chưa có tài khoản?</div>
              <b :class="$style.ngK">Đăng ký</b>
            </div>
          </div>
        </div>
      </div>
      <img :class="$style.imgIcon" alt="" src="../../../public/image/anh-dang-ki.jpg" />
      <div :class="$style.signUp1">
        <div :class="$style.text2">Bạn chưa có tài khoản?</div>
        <b :class="$style.ngK1">Đăng ký</b>
      </div>
    </div>
  </template>
  
  <script setup>
 
  </script>
  
  <style module>
  .decorIcon {
    position: relative;
    width: 500px;
    height: 400px;
    gap: 0px;
    opacity: 0px;
  }
  .logoIcon {
    width: 138px;
    position: relative;
    height: 32px;
  }
  
  .ngNhp1 {
    position: relative;
    line-height: 40px;
  }
  
  .cngPhtTrin {
    align-self: stretch;
    position: relative;
    font-size: 16px;
    line-height: 24px;
    color: #505050;
    text-align: left;
  }
  
  .ngNhpParent {
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
  }
  
  .label {
    position: relative;
    line-height: 20px;
    font-weight: 500;
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
  
  .checkboxBase {
    width: 20px;
    position: relative;
    border-radius: 6px;
    background-color: #fff;
    border: 1px solid #b5b5b5;
    box-sizing: border-box;
    height: 20px;
    overflow: hidden;
    flex-shrink: 0;
  }
  
  .checkbox1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  
  .text2 {
    position: relative;
    line-height: 24px;
  }
  
  .checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
  }
  
  .qunMtKhu {
    position: relative;
    line-height: 24px;
    font-weight: 600;
    color: #bc2228;
  }
  
  .remember {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 16px;
    color: #848484;
  }
  
  .emailPassParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
    font-size: 14px;
    color: #3d3d3d;
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
  
  .ngK {
    position: relative;
    line-height: 24px;
    color: #bc2228;
  }
  
  .signUp {
    display: none;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
    color: #848484;
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
  
  .loginForm {

    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 32px;

  
  }
  
  .content {
    position: absolute;
    top: calc(50% - 258px);
    left: calc(25% - 258px);
    width: 500px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  .ngK1 {
    position: relative;
    line-height: 24px;
    color: #ab1f24;
  }
  
  .signUp1 {
    position: absolute;
    top: 714px;
    left: 249px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
    font-size: 16px;
    color: #676767;
  }
  
  .ngNhp {
    width: 100%;
    position: relative;
    background-color: #fff;
    height: 960px;
    overflow: hidden;
    text-align: left;
    font-size: 32px;
    color: #000;
    font-family: "SF Pro Display";
  }
  </style>
  