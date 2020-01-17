<script>
  import { onMount } from "svelte";
  let data = {
      name:"学习",
      pvg:"70%"
  }
  onMount(() => {
    circle("process-circle",'#f93040',data);
    circle("knowledge-circle",'#3a8afb',data);
    circle("sort-circle",'#fdb32b',data);
  });
  function circle(el,color,data) {
    var canvas = document.getElementById(el);
    var ctx = canvas.getContext("2d");

    /*填充文字*/

    ctx.font = "18px Microsoft YaHei";
    /*文字颜色*/
    ctx.fillStyle = "#4b4d4e";
    /*文字内容*/
    var insertContent = data.name;
    var text = ctx.measureText(insertContent);
    /*插入文字，后面两个参数为文字的位置*/
    /*此处注意：text.width获得文字的宽度，然后就能计算出文字居中需要的x值*/
    ctx.fillText(insertContent, (280 - text.width) / 2, 68);

    /*填充百分比*/
    ctx.fillStyle = color;
    var ratioStr = data.pvg;
    var text = ctx.measureText(ratioStr);
    ctx.fillText(ratioStr, (280 - text.width) / 2, 85);

    /*开始圆环*/
    var circleObj = {
      ctx: ctx,
      /*圆心*/
      x: 145,
      y: 80,
      /*半径*/
      radius: 60,
      /*环的宽度*/
      lineWidth: 15
    };

    /*有色的圆环*/
    /*从-90度的地方开始画*/
    circleObj.startAngle = 0;
    /*从当前度数减去-90度*/
    circleObj.endAngle = Math.PI * 2 * 0.25;
    circleObj.color = color;
    drawCircle(circleObj);

    /*灰色的圆环*/
    /*开始的度数-从上一个结束的位置开始*/
    circleObj.startAngle = circleObj.endAngle;
    /*结束的度数*/
    circleObj.endAngle = Math.PI * 2;
    circleObj.color = "#e9e9e9";
    drawCircle(circleObj);
  }
  /*画曲线*/
  function drawCircle(circleObj) {
    var ctx = circleObj.ctx;
    ctx.beginPath();
    ctx.arc(
      circleObj.x,
      circleObj.y,
      circleObj.radius,
      circleObj.startAngle,
      circleObj.endAngle,
      false
    );
    //设定曲线粗细度
    ctx.lineWidth = circleObj.lineWidth;
    //给曲线着色
    ctx.strokeStyle = circleObj.color;
    //连接处样式
    ctx.lineCap = "round";
    //给环着色
    ctx.stroke();
    ctx.closePath();
  }
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

    .container {
      width: 100%;
      height: 200px;
      padding-bottom:20px; 
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;

      .process {
        width: 100%;
        margin: 0 auto;
        #process-circle {
          display: block;

          width: 100%;
        }
        p {
          height: 30px;
          line-height: 30px;
          text-align: center;
          .value {
            color: #f93040;
            font-size: 30px;
          }
        }
      }
      .knowledge {
        width: 100%;
        margin: 0 auto;
        #knowledge-circle {
          display: block;

          width: 100%;
          /*  height: 100px; */
        }
        p {
          height: 30px;
          line-height: 30px;
          text-align: center;
          .value {
            color: #3a8afb;
            font-size: 30px;
          }
        }
      }
      .sort {
        width: 100%;
        margin: 0 auto;
        #sort-circle {
          display: block;

          /*   height: 100px; */
          width: 100%;
        }
        p {
          height: 30px;
          line-height: 30px;
          text-align: center;
          .value {
            color: #fdb32b;
            font-size: 30px;
          }
        }
      }
    }
  }
</style>

<div class="app-container">
  <li class="title">学期概览</li>
  <div class="container">
    <div class="process">
      <canvas id="process-circle" />
      <p>课程进度</p>
      <p>
        已学习
        <span class="value">3</span>
        课时
      </p>
    </div>
    <div class="knowledge">
      <canvas id="knowledge-circle" />
      <p>知识掌握</p>
      <p>
        已学习
        <span class="value">3</span>
        类知识
      </p>
    </div>
    <div class="sort">
      <canvas id="sort-circle" />
      <p>班级排名</p>
      <p>
        第
        <span class="value">3</span>
        名
      </p>
    </div>
  </div>

</div>
