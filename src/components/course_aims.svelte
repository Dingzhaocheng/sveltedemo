<script>
  export const course = {};
</script>

<style type="text/scss">
 /*  @import url("../asserts/base.css"); */
  .app-container {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: #737373;
    font-size: 14px;
    
    .title {
        margin:10px auto;
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
    .list {
      li {
        counter-increment: li;
        height: 60px;
        line-height: 60px;
      }
      //设置li序号样式
      li:before {
        content: counter(li);
        color: #fff;
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 24px;
        border-radius: 12px;
        margin-left: 4px;
        background-color: #fc0404;
        margin-right: 3px;
        text-align: center;
        direction: rtl;
      }
    }
  }
</style>

<div class="app-container">
  <li class="title">课程目标</li>
  <ul class="list">
    <li>hello</li>
    <li>hello</li>
    <li>hello</li>
  </ul>

</div>
