<script>
  //这里引入组件
  import CourseAims from "../components/course_aims";
  import CoursePerformence from "../components/course_performence";
  import TermOverview from "../components/term_overview";
  //这里引入声明周期
  import { onMount } from "svelte";
  //这里声明变量
  let data = [];
  let user = {
    name: "小明",
    age: "28",
    opening_date: "2020-01-07",
    class_arrange_name: "大V体验课2020-01-07-25班"
  };
  /* let course = {
    name: "数与数感",
    num: "第二课",
    opening_date: "2020-01-07"
  }; */
  let [
    course,
    className,
    statistics,
    baby,
    next_course,
    course_report,
    teacher
  ] = [{}, {}, {}, {}, {}, {}, {}];
  let json = {};

  let src =
    "http://miaokids.oss-cn-qingdao.aliyuncs.com/website/userInfo/e2b027f0cd638beea023ea13f5f53b64.jpg";

  onMount(async function() {
    const response = await fetch(
      "http://api.miaokids.com/parent/course-report?user_id=270268&&index_name=L3C0005"
    );
    json = await response.json();
    if (json.code === 200) {
      course = json.data.course;
      baby = json.data.baby;
      className = json.data.class;
    }
  });
</script>

<style type="text/scss" lang="scss">
  @import url("../asserts/base.css");
  @svg 1px-border {
    height: 2px;
    @rect {
      fill: var(--color, black);
      width: 100%;
      height: 50%;
    }
  }
  .app-container {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: #737373;
    font-size: 14px;
    overflow: hidden;
    width: 96%;
    padding: 2%;
    background-color: #fff;
    .user {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;
      .avatar {
        width: 166px;
        height: 166px;
        border-radius: 88px;
      }
      .user-info {
        text-align: center;
        .name {
          font-size: 30px;
        }
        .age {
          font-size: 26px;
        }
      }
      .user-class {
        width: 400px;
     /*    height: 80px; */
        border: 1px solid #fc0404;
        border-radius: 5px;
        color: #fc0404;
        /*  padding: 10px; */
        text-align: center;
        /*  p{
               
            } */
        p:first-child {
          padding: 10px;
          color: #fff;
          background-color: #fc0404;
          border-bottom: 1px solid #fc0404;
        }
      }
    }
    .main {
      width: 100%;
      .card {
        margin-top: 40px;
        width: 96%;
        padding: 2%;
        height: auto;
        box-shadow: 
            /*  0 0  0 2px rgb(255,255,255), */ 3px 3px 10px
          rgba(0, 0, 0, 0.3);
        /*  box-shadow:  0 0 10rpx 0 rgba(31, 35, 49, 0.3); */
        border-radius: 4px;
      }
      .content {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        .line {
          width: 190px;
          height: 6px;
          background-color: #fc0404;
        }
        .main-title {
          text-align: center;
          font-size: 26px;
          .course-number {
            font-size: 14px;
            font-weight: 500;
          }
          .course {
            font-size: 30px;
            font-weight: 500;
          }
        }
      }
    }
  }
</style>

<div class="app-container">
  <header class="user">
    <img
      class="avatar"
      src={(baby.photo = !baby.photo ? src : baby.photo)}
      alt="" />
    <div class="user-info">
      <p class="name">{baby.baby_name}</p>
      <p class="age">{baby.baby_age}岁</p>
    </div>
    <div class="user-class">
      <p>{className.name}</p>
      <p>{user.opening_date}</p>
    </div>
  </header>
  <main class="main">
    <div class="content">

      <div class="line" />
      <div class="main-title">
        <p class="course-number">第{course.sort}课</p>
        <p class="course">{course.name_cn}</p>
        <p class="course-number">{course.opening_date}</p>
      </div>
      <div class="line" />
    </div>
    <div class="card">
      <CourseAims />
    </div>
    <div class="card">
      <CoursePerformence />
    </div>
    <div class="card">
      <TermOverview />
    </div>

  </main>

</div>
