<template>
    <div class="toast" v-show="isShow">
      <div>
        {{message}}
      </div>
    </div>
</template>

<script>
    export default {
      name: "Toast",
      /*props: {
        message: {
          type: String,
          default: ''
        },
        isShow: {
          type: Boolean,
          default: false
        }
      },*/
      data() {
        return {
          message: '',
          isShow: false
        }
      },
      methods: {
        showMsg(message) {
          this.isShow = true
          this.message = message

          setTimeout(() => {
            this.isShow = false
            this.message = ''
          },2000)

        }
      }
    }
</script>

<style scoped>
  .toast {
    position: fixed;

    top: 50%;
    left: 50%;
    padding: 8px 10px;
    transform: translate(-50%, -50%);

    background-color: rgba(0,0,0,.5);
    color: #ffffff;
    text-align: center;

    z-index: 99;

  }
</style>
