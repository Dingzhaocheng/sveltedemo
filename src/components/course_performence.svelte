<script>
  import Charts from "./charts";
  let avatar =
    "https://miaokids.oss-cn-qingdao.aliyuncs.com/website/course_icon/abd728a15436728eda6711907cc096f3.png";
</script>

<style type="text/scss">
  .app-container {
      width: 100%;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: #737373;
    font-size: 14px;

    .title {
      margin: 10px auto;
      font-size: 28px;
      font-weight: 700;
    }
    li::before {
      content: "\2022";
      color: red; /* Change the color */
      font-weight: bold; /* If you want it to be bold */
      display: inline-block; /* Needed to add space between the bullet and the text */
      width: 10px; /* Also needed for space (tweak if needed) */
      margin-left: 2px; /* Also needed for space (tweak if needed) */
      margin-right: 4px;
    }
    .subtitle {
      margin: 10px;
      font-size: 20px;
      font-weight: 600;
    }
    .block {
      margin: 10px 80px;
      .key {
        font-size: 18px;
        margin-right: 20px;
      }
      .value {
        font-size: 32px;
        font-weight: 600;
        color: #fc0404;
      }
    }
    .teacher {
      width: 100%;
      height: 500px;
      .avatar {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        .lazy {
          width: 82px;
          height: 82px;
          background-color: #FCF4EC;
          border-radius: 41px;
          img {
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 50%;
            /*  vertical-align: bottom; */
          }
        }
        .name {
          font-size: 24px;
          font-weight: 600;
          margin-left: 20px;
        }
      }
      .bubble {
        width: calc(100% - 200px);
        margin-left: 90px;
        padding: 20px;
        background-color: #fff2f3;
        .content{
              text-indent:2em;
        }
        .button{
            width: 100%;
            margin-top: 20px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            align-items: center;
            p{
               
              /*   width: 150px; */
              padding:0 15px;
                height: 50px;
                font-size: 14px;
                border-radius: 50px;
                background-color: #66a4fb;
                text-align: center;
                line-height: 50px;
                color: #fff;
            }
        }
      }
    }
  }
</style>

<div class="app-container">
  <li class="title">课堂表现</li>
  <p class="subtitle">本次学习:</p>
  <div class="block">
    <span class="key">
      知识点:
      <span class="value">3</span>
      个
    </span>
    <span class="key">
      互动题:
      <span class="value">13</span>
      个
    </span>
  </div>
  <Charts />
  <div class="teacher">
    <div class="avatar">
      <div class="lazy">
        <img src={avatar} alt="" />
      </div>
      <p class="name">李老师</p>
    </div>
    <div class="bubble">
      
        <p class="content">
          小朋友你已经基本掌握了这节课的主要知识点。在课堂互动中，遇到难题时，你也不会放弃，很快就能找到正确答案！下次上课时，可以更专注一些，遇到难题多思考一下再回答，提升答题的准确率，相信你可以做得更好！
        </p>
        <div class="button">
          <p>认识数字</p>
          <p>神奇的三角形</p>
          <p>一一对应</p>
        </div>
     

    </div>
  </div>

</div>
