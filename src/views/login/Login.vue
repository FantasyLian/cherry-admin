<template>
  <section class="login">
    <div class="login-wrap">
      <img src="@/assets/images/login_pic.png" />
      <div class="login-box">
        <img src="@/assets/images/logo.png" class="logo" />
        <h1>车厘子交易平台</h1>
        <a-form
          class="login-form"
          :form="form"
          :layout="'vertical'"
          @submit="handleSubmit"
        >
          <a-form-item label="账号/ID">
            <a-input
              v-decorator="[
                'account',
                { rules: [{ required: true, message: '请输入账号/ID!' }] },
              ]"
            />
          </a-form-item>
          <a-form-item label="验证码">
            <a-row :gutter="8">
              <a-col :span="16">
                <a-input
                  v-decorator="[
                    'captcha',
                    { rules: [{ required: true, message: '请输入验证码!' }] },
                  ]"
                />
              </a-col>
              <a-col :span="8">
                <count-down
                  :fn="handleGetCaptcha"
                  :deftext="'获取验证码'"
                  ref="count"
                  :second="60"
                />
              </a-col>
            </a-row>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" class="login-button" html-type="submit">
              登录
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </section>
</template>
<script>
import { Form, Button, Input, Row, Col } from 'ant-design-vue'
import { getCaptcha, login } from '@/api'
import CountDown from '@/components/CountDown'
import local from '@/utils/local'
export default {
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AButton: Button,
    AInput: Input,
    ARow: Row,
    ACol: Col,
    CountDown
  },
  data () {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    // 提交表单
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.handleLogin(values)
        }
      })
    },

    // 获取验证码
    async handleGetCaptcha () {
      await getCaptcha({ mobile: this.form.getFieldValue('account') }).then(({ code, msg }) => {
        if (code === 200) {
          this.$refs.count.countDown()
          this.$message.success({ content: msg })
        }
      })
    },

    // 登录
    async handleLogin (obj) {
      await login({ mobile: obj.account, code: obj.captcha }).then(({ code, data }) => {
        if (code === 200) {
          this.$message.success({ content: `登录成功！欢迎${data.mobile}` })
          local.set('token', data.token)
          local.set('mobile', data.mobile)
          this.$router.replace('/home')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
section {
  width: 1440px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .login-wrap {
    height: 553px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .login-pic {
      width: 755px;
      height: 553px;
    }
    .login-box {
      width: 324px;

      .logo {
        display: block;
        width: 50px;
        height: 50px;
        margin: 24px auto;
        background: rgba(216, 216, 216, 1);
        box-shadow: 0 2px 4px 0 rgba(255, 145, 139, 0.19);
        border-radius: 4px;
      }

      h1 {
        height: 28px;
        font-size: 20px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        line-height: 28px;
        text-align: center;
      }

      .login-form {
        width: 324px;
        height: 360px;
        margin-top: 60px;

        .login-button {
          border: 0;
          width: 324px;
          background: rgba(255, 133, 156, 1);
          font-size: 16px;
          color: #fff;
          margin-top: 24px;
          .el-form-item {
            &:last-child {
              margin-bottom: 0;
            }
          }

          &:active {
            color: rgba(0, 0, 0, 0);
          }
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
