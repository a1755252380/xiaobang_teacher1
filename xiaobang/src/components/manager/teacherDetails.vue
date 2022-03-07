<template>
  <el-container>
    <div class="student_container">
      <el-avatar
        :size="120"
        :src="teaInfo.teacherImgSrc"
      ></el-avatar>
      <p>{{ teaInfo.teacherName }}</p>
    </div>
    <div class="result_container">
      <el-card>
        <h1>近期任务</h1>
        <el-card>
          <p>对学生期末考试进行出卷</p>
        </el-card>
        <el-card>
          <p>编写《XXX教材》</p>
        </el-card>
      </el-card>
    </div>
    <div class="middle_container">
      <el-card class="student_card">
        <h1>所教学生</h1>
        <div style="display: flex; justify-content: space-evenly">
          <div
            class="student_container"
            v-for="item in teaInfo.studentList"
            :key="item.id"
          >
            <el-avatar
              :size="110"
              :src="item.studentImgSrc"
            ></el-avatar>
            <p>{{ item.studentName }}</p>
          </div>
        </div>
      </el-card>

      <el-card class="course_container">
        <h1>课程</h1>
        <el-card
          v-for="item in teaInfo.courseList"
          :key="item.id"
        >
          <div class="class_time">
            <i class="el-icon-time"></i><span>时间：</span><span>{{ item.classTime }}</span>
          </div>
          <div class="class_name">
            <i class="el-icon-notebook-2"></i><span>课程名称：</span><span>{{ item.courseName }}</span>
          </div>
          <div class="teacher_name">
            <i class="el-icon-user"></i><span>教学学生</span><span>魏佳君 黄柏枝</span>
          </div>
          <div class="classroom_name">
            <i class="el-icon-house"></i><span>地点：</span><span>C3教室</span>
          </div>
        </el-card>
      </el-card>
    </div>
    <div class="right_container">
      <el-card class="level_card">
        <p>
          钢琴级别：<span>{{ teaInfo.level }}级</span>
        </p>
      </el-card>
      <el-card class="n"> </el-card>
    </div>
  </el-container>
</template>

<style scoped>
.el-container {
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-size: 3vh;
}
.student_container {
  width: 100%;
  margin-bottom: 2vh;
}
.result_container {
  width: 21%;
  letter-spacing: 0.1vw;
}
.result_container .el-card {
  margin-bottom: 2vh;
}
.result_container p {
  text-align: start;
  padding: 10px;
}
.middle_container {
  width: 51%;
  height: 69vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.student_card {
  width: 100%;
  height: 40%;
  text-align: center;
}

.student_card .student_container {
  text-align: center;
  width: 20%;
  font-size: 2vh;
  letter-spacing: 0.1vw;
}
.student_container .el-avatar {
  cursor: pointer;
  margin-bottom: 1vh;
}
.course_container {
  width: 100%;
  height: 57%;
  text-align: center;
}

.course_container .el-card {
  text-align: start;
  margin-top: 1vh;
}
.course_container .el-card:nth-child(1) {
  margin: 0;
}

.class_time,
.class_name,
.teacher_name,
.classroom_name {
  font-size: 16px;
}
.class_time span:nth-child(3),
.class_name span:nth-child(3),
.teacher_name span:nth-child(3),
.classroom_name span:nth-child(3) {
  margin-left: 5px;
  font-size: 18px;
  color: #7a2323;
}
.right_container {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.level_card {
  height: 20%;
}
.level_card span {
  font-size: 4.5vh;
  color: #7a2323;
}
.n {
  height: 75%;
}
h1 {
  margin-bottom: 2vh;
}
</style>
    
<script>
export default {
  data () {
    return {
      treaId: "",
      teaInfo: {},
      teaInfoList: [
        {
          id: 1,
          teacherName: "唐豪兴",
          teacherImgSrc: require("../../assets/images/teacher/1.jpg"),
          studentList: [
            {
              id: "1",
              studentName: "魏佳君",
              studentImgSrc: require("../../assets/images/student/1.jpg"),
            },
            {
              id: "2",
              studentName: "黄柏枝",
              studentImgSrc: require("../../assets/images/student/2.jpg"),
            },
            {
              id: "3",
              studentName: "柯娜娜",
              studentImgSrc: require("../../assets/images/student/3.jpg"),
            },
            {
              id: "4",
              studentName: "龙威生",
              studentImgSrc: require("../../assets/images/student/4.jpg"),
            },
          ],

          level: "八",
          courseList: [
            {
              id: 1,
              courseName: "请弹吧（用右手）",
              classTime: "2021/4/12 19:00 —— 21：00",
            },
            {
              id: 2,
              courseName: "请弹吧（用左手）",
              classTime: "2021/4/13 19:00 —— 21：00",
            },
          ],
        },
        {
          id: 2,
          teacherName: "邓晓璐",
          teacherImgSrc: require("../../assets/images/teacher/2.jpg"),
          studentList: [
            {
              id: "1",
              studentName: "魏佳君",
              studentImgSrc: require("../../assets/images/student/1.jpg"),
            },
            {
              id: "2",
              studentName: "黄柏枝",
              studentImgSrc: require("../../assets/images/student/2.jpg"),
            },
            {
              id: "3",
              studentName: "柯娜娜",
              studentImgSrc: require("../../assets/images/student/3.jpg"),
            },
            {
              id: "4",
              studentName: "蔡小洪",
              studentImgSrc: require("../../assets/images/student/5.jpg"),
            },
          ],

          level: "八",
          courseList: [
            {
              id: 1,
              courseName: "请弹吧（用右手）",
              classTime: "2021/4/12 19:00 —— 21：00",
            },
            {
              id: 2,
              courseName: "请弹吧（用左手）",
              classTime: "2021/4/13 19:00 —— 21：00",
            },
          ],
        },
        {
          id: 3,
          teacherName: "王斯诺",
          teacherImgSrc: require("../../assets/images/teacher/3.jpg"),
          studentList: [
            {
              id: "1",
              studentName: "魏佳君",
              studentImgSrc: require("../../assets/images/student/1.jpg"),
            },
            {
              id: "2",
              studentName: "黄柏枝",
              studentImgSrc: require("../../assets/images/student/2.jpg"),
            },
            {
              id: "3",
              studentName: "柯娜娜",
              studentImgSrc: require("../../assets/images/student/3.jpg"),
            },
            {
              id: "4",
              studentName: "蔡小洪",
              studentImgSrc: require("../../assets/images/student/5.jpg"),
            },
          ],

          level: "八",
          courseList: [
            {
              id: 1,
              courseName: "请弹吧（用右手）",
              classTime: "2021/4/12 19:00 —— 21：00",
            },
            {
              id: 2,
              courseName: "请弹吧（用左手）",
              classTime: "2021/4/13 19:00 —— 21：00",
            },
          ],
        },
        {
          id: 4,
          teacherName: "黄贵蓉",
          teacherImgSrc: require("../../assets/images/teacher/4.jpg"),
          studentList: [
            {
              id: "1",
              studentName: "吴正达",
              studentImgSrc: require("../../assets/images/student/6.jpg"),
            },
            {
              id: "4",
              studentName: "蔡小洪",
              studentImgSrc: require("../../assets/images/student/5.jpg"),
            },
          ],

          level: "七",
          courseList: [
            {
              id: 1,
              courseName: "请弹吧（用右手）",
              classTime: "2021/4/12 19:00 —— 21：00",
            },
            {
              id: 2,
              courseName: "请弹吧（用左手）",
              classTime: "2021/4/13 19:00 —— 21：00",
            },
          ],
        },
        {
          id: 5,
          teacherName: "余沛泳",
          teacherImgSrc: require("../../assets/images/teacher/5.jpg"),
          studentList: [
            {
              id: "1",
              studentName: "龙威生",
              studentImgSrc: require("../../assets/images/student/4.jpg"),
            },
            {
              id: "2",
              studentName: "蔡小洪",
              studentImgSrc: require("../../assets/images/student/5.jpg"),
            },
          ],

          level: "七",
          courseList: [
            {
              id: 1,
              courseName: "请弹吧（用右手）",
              classTime: "2021/4/12 19:00 —— 21：00",
            },
            {
              id: 2,
              courseName: "请弹吧（用左手）",
              classTime: "2021/4/13 19:00 —— 21：00",
            },
          ],
        },
        {
          id: 6,
          teacherName: "王雪悦",
          teacherImgSrc: require("../../assets/images/teacher/6.jpg"),
          studentList: [
            {
              id: "1",
              studentName: "柯娜娜",
              studentImgSrc: require("../../assets/images/student/3.jpg"),
            },
            {
              id: "2",
              studentName: "蔡小洪",
              studentImgSrc: require("../../assets/images/student/5.jpg"),
            },
          ],

          level: "六",
          courseList: [
            {
              id: 1,
              courseName: "请弹吧（用右手）",
              classTime: "2021/4/12 19:00 —— 21：00",
            },
            {
              id: 2,
              courseName: "请弹吧（用左手）",
              classTime: "2021/4/13 19:00 —— 21：00",
            },
          ],
        },
      ],
    };
  },
  methods: {
    customColorMethod (percentage) {
      if (percentage < 60) {
        return "#FF4949";
      } else if (percentage < 80) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    format (percentage) {
      return percentage + "分";
    },

  },
  mounted: function () {
    this.teaInfo = this.teaInfoList[this.$route.params.id - 1];
    console.log(this.teaInfo);
    this.drawReadr();
  },
};
</script>
