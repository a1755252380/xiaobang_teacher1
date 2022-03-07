<template>
  <el-container>
    <div class="student_container">
      <el-avatar
        :size="120"
        :src="stuInfo.studentImgSrc"
      ></el-avatar>
      <p>{{ stuInfo.studentName }}</p>
    </div>
    <div class="result_container">
      <el-card>
        <h1>能力评估</h1>
        <div id="myChart"></div>
        <ul class="result_ul">
          <li
            v-for="item in stuInfo.abilityList"
            :key="item.id"
          >
            <span>{{ item.name }}</span>
            <el-progress
              :percentage="item.score"
              :color="customColorMethod"
              :format="format"
            ></el-progress>
          </li>
        </ul>
      </el-card>
    </div>
    <div class="middle_container">
      <el-card class="teacher_card">
        <h1>任课教师</h1>
        <div style="display:flex; justify-content: space-evenly;">
          <div
            class="teacher_container"
            v-for="item in stuInfo.teacherList"
            :key="item.id"
          >
            <el-avatar
              :size="110"
              :src="item.teacherImgSrc"
            ></el-avatar>
            <p>{{ item.teacherName }}</p>
          </div>
        </div>
      </el-card>

      <el-card class="course_container">
        <h1>课程</h1>
        <el-card
          v-for="item in stuInfo.courseList"
          :key="item.id"
        >
          <div class="class_time">
            <i class="el-icon-time"></i><span>时间：</span><span>{{item.classTime}}</span>
          </div>
          <div class="class_name">
            <i class="el-icon-notebook-2"></i><span>课程名称：</span><span>{{item.courseName}}</span>
          </div>
          <div class="teacher_name">
            <i class="el-icon-user"></i><span>授课老师：</span><span>谭浩</span>
          </div>
          <div class="classroom_name">
            <i class="el-icon-house"></i><span>地点：</span><span>C3教室</span>
          </div>
        </el-card>
      </el-card>
    </div>
    <div class="right_container">
      <el-card class="level_card">
        <p>钢琴级别：<span>{{stuInfo.level}}级</span></p>
      </el-card>
      <el-card class="task_card">
        <h1>任务列表</h1>
        <el-card
          v-for="item in stuInfo.task"
          :key="item.id"
        >
          <div class="class_time">
            <i class="el-icon-time"></i><span>时间：</span><span>{{item.time}}</span>
          </div>
          <div class="class_name">
            <i class="el-icon-notebook-2"></i><span>课程名称：</span><span>{{item.musicName}}</span>
          </div>
          <div class="teacher_name">
            <i class="el-icon-user"></i><span>授课老师：</span><span>谭浩</span>
          </div>
        </el-card>
      </el-card>
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
.result_container #myChart {
  width: 100%;
  height: 27vh;
  margin-top: 2%;
  margin-bottom: 8%;
}
.result_ul {
  font-size: 2vh;
}
.result_ul li {
  padding: 1vh 0;
  display: flex;
}
.result_ul li span:nth-child(1) {
  text-align: center;
  display: inline-block;
  font-size: 1.6vh;
  width: 20%;
  color: #999999;
  margin-right: 1vw;
}
.result_ul .el-progress {
  width: 70%;
}
.middle_container {
  width: 51%;
  height: 69vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.teacher_card {
  width: 100%;
  height: 40%;
  text-align: center;
}

.teacher_card .teacher_container {
  text-align: center;
  width: 20%;
  font-size: 2vh;
  letter-spacing: 0.1vw;
}
.teacher_container .el-avatar {
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
.task_card {
  height: 75%;
  text-align: start;
}
.task_card h1 {
  text-align: center;
}
.task_card .el-card {
  text-align: start;
  margin-bottom: 5%;
}
h1 {
  margin-bottom: 2vh;
}
</style>
    
<script>
export default {
  data () {
    return {
      studentId: "",
      stuInfo: {},
      stuInfoList: [
        {
          id: 1, studentName: "魏佳君", studentImgSrc: require("../../assets/images/student/1.jpg"),
          teacherList: [{ id: 1, teacherName: "谭浩", teacherImgSrc: require("../../assets/images/teacher/1.jpg") }, { id: '2', teacherName: "龙晓琳", teacherImgSrc: require("../../assets/images/teacher/2.jpg") }],
          abilityList: [
            {
              "id": 1,
              "name": "音准",
              "score": 90
            },
            {
              "id": 2,
              "name": "指法",
              "score": 59
            },
            {
              "id": 3,
              "name": "手型",
              "score": 83
            },
            {
              "id": 4,
              "name": "速度",
              "score": 79
            },
            {
              "id": 5,
              "name": "平稳度",
              "score": 99
            },
            {
              "id": 6,
              "name": "完整度",
              "score": 92
            },
            {
              "id": 7,
              "name": "节奏",
              "score": 82
            }
          ], task: [{ id: 1, teacherName: '谭浩', musicName: '火车', time: '2021/4/17' }, { id: 2, teacherName: '谭浩', musicName: '海军工兵', time: '2021/4/17' }]
          , level: "四", courseList: [{ id: 1, courseName: "小矮人进行曲", classTime: "2021/4/12 19:00 —— 21：00" }, { id: 2, courseName: "小矮人舞曲", classTime: "2021/4/13 19:00 —— 21：00" }]
        },
        {
          id: 2,
          studentName: "黄柏枝",
          studentImgSrc: require("../../assets/images/student/2.jpg"),
          teacherList: [
            {
              id: 1,
              teacherName: "唐豪兴",
              teacherImgSrc: require("../../assets/images/teacher/1.jpg"),
            },
            {
              id: "2",
              teacherName: "邓晓璐",
              teacherImgSrc: require("../../assets/images/teacher/2.jpg"),
            },
            { id: '3', teacherName: "王斯诺", teacherImgSrc: require("../../assets/images/teacher/3.jpg") }
          ],
          abilityList: [
            {
              id: 1,
              name: "音准",
              score: 90,
            },
            {
              id: 2,
              name: "指法",
              score: 59,
            },
            {
              id: 3,
              name: "手型",
              score: 83,
            },
            {
              id: 4,
              name: "速度",
              score: 79,
            },
            {
              id: 5,
              name: "平稳度",
              score: 99,
            },
            {
              id: 6,
              name: "完整度",
              score: 92,
            },
            {
              id: 7,
              name: "节奏",
              score: 82,
            },
          ], task: [{ id: 1, teacherName: '谭浩', musicName: '火车', time: '2021/4/17' }, { id: 2, teacherName: '谭浩', musicName: '海军工兵', time: '2021/4/17' }],
          level: "四",
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
          id: 3, studentName: "柯娜娜", studentImgSrc: require("../../assets/images/student/3.jpg"),
          teacherList: [{ id: 1, teacherName: "唐豪兴", teacherImgSrc: require("../../assets/images/teacher/1.jpg") }, { id: '3', teacherName: "王斯诺", teacherImgSrc: require("../../assets/images/teacher/3.jpg") }],
          abilityList: [
            {
              "id": 1,
              "name": "音准",
              "score": 90
            },
            {
              "id": 2,
              "name": "指法",
              "score": 59
            },
            {
              "id": 3,
              "name": "手型",
              "score": 87
            },
            {
              "id": 4,
              "name": "速度",
              "score": 95
            },
            {
              "id": 5,
              "name": "平稳度",
              "score": 72
            },
            {
              "id": 6,
              "name": "完整度",
              "score": 88
            },
            {
              "id": 7,
              "name": "节奏",
              "score": 68
            }
          ], task: [{ id: 1, teacherName: '谭浩', musicName: '火车', time: '2021/4/17' }, { id: 2, teacherName: '谭浩', musicName: '海军工兵', time: '2021/4/17' }], level: "五", courseList: [{ id: 1, courseName: "请弹吧（用右手）", classTime: "2021/4/12 19:00 —— 21：00" }, { id: 2, courseName: "请弹吧（用左手）", classTime: "2021/4/13 19:00 —— 21：00" }]
        },
        {
          id: 4,
          studentName: "龙威生",
          studentImgSrc: require("../../assets/images/student/4.jpg"),
          teacherList: [
            {
              id: 1,
              teacherName: "唐豪兴",
              teacherImgSrc: require("../../assets/images/teacher/1.jpg"),
            },

            { id: '3', teacherName: "王斯诺", teacherImgSrc: require("../../assets/images/teacher/3.jpg") }
          ],
          abilityList: [
            {
              id: 1,
              name: "音准",
              score: 88,
            },
            {
              id: 2,
              name: "指法",
              score: 28,
            },
            {
              id: 3,
              name: "手型",
              score: 90,
            },
            {
              id: 4,
              name: "速度",
              score: 52,
            },
            {
              id: 5,
              name: "平稳度",
              score: 99,
            },
            {
              id: 6,
              name: "完整度",
              score: 92,
            },
            {
              id: 7,
              name: "节奏",
              score: 82,
            },
          ], task: [{ id: 1, teacherName: '谭浩', musicName: '火车', time: '2021/4/17' }, { id: 2, teacherName: '谭浩', musicName: '海军工兵', time: '2021/4/17' }],
          level: "三",
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
          studentName: "蔡小洪",
          studentImgSrc: require("../../assets/images/student/5.jpg"),
          teacherList: [
            {
              id: 1,
              teacherName: "唐豪兴",
              teacherImgSrc: require("../../assets/images/teacher/1.jpg"),
            }
          ],
          abilityList: [
            {
              id: 1,
              name: "音准",
              score: 80,
            },
            {
              id: 2,
              name: "指法",
              score: 59,
            },
            {
              id: 3,
              name: "手型",
              score: 83,
            },
            {
              id: 4,
              name: "速度",
              score: 69,
            },
            {
              id: 5,
              name: "平稳度",
              score: 92,
            },
            {
              id: 6,
              name: "完整度",
              score: 92,
            },
            {
              id: 7,
              name: "节奏",
              score: 80,
            },
          ], task: [{ id: 1, teacherName: '谭浩', musicName: '火车', time: '2021/4/17' }, { id: 2, teacherName: '谭浩', musicName: '海军工兵', time: '2021/4/17' }],
          level: "三",
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
          studentName: "吴正达",
          studentImgSrc: require("../../assets/images/student/2.jpg"),
          teacherList: [
            {
              id: 1,
              teacherName: "唐豪兴",
              teacherImgSrc: require("../../assets/images/teacher/1.jpg"),
            },

          ],
          abilityList: [
            {
              id: 1,
              name: "音准",
              score: 80,
            },
            {
              id: 2,
              name: "指法",
              score: 55,
            },
            {
              id: 3,
              name: "手型",
              score: 75,
            },
            {
              id: 4,
              name: "速度",
              score: 77,
            },
            {
              id: 5,
              name: "平稳度",
              score: 90,
            },
            {
              id: 6,
              name: "完整度",
              score: 83,
            },
            {
              id: 7,
              name: "节奏",
              score: 25,
            },
          ], task: [{ id: 1, teacherName: '谭浩', musicName: '火车', time: '2021/4/17' }, { id: 2, teacherName: '谭浩', musicName: '海军工兵', time: '2021/4/17' }],
          level: "二",
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
      console.log(percentage);
      return "#F44336";
    },
    format (percentage) {
      return percentage + "分"
    },
    drawReadr () {
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      var abilityList = this.stuInfo.abilityList;
      console.log(abilityList);
      var scoreList = [];
      for (var item of abilityList) {
        scoreList.push(item.score);
      }
      myChart.setOption({
        // title: {
        //   text: "评测报告图",
        // },
        // legend: {
        //   data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"],
        // },
        radar: {
          // 图表颜色
          splitArea: {
            areaStyle: {
              color: ["#FEFEFE", "#FFEBEE"],
            },
          },
          // shape: 'circle',
          indicator: [
            { name: "音准", max: 100 },
            { name: "指法", max: 100 },
            { name: "手型", max: 100 },
            { name: "速度", max: 100 },
            { name: "平稳度", max: 100 },
            { name: "完整度", max: 100 },
            { name: "节奏", max: 100 },
          ],
        },
        textStyle: {
          color: "#333333", // 文字颜色
        },
        series: [
          {
            name: "钢琴能力曲线图",
            type: "radar",
            data: [
              {
                value: scoreList,
                name: "能力曲线",
              },
            ],

            itemStyle: {
              normal: {
                color: "#F44336",
                lineStyle: {
                  color: "#DB7093",
                },
              },
            },
          },
        ],
      });
    },
  },
  mounted: function () {
    this.stuInfo = this.stuInfoList[this.$route.params.id - 1];
    console.log(this.stuInfo);
    this.drawReadr();
  },
};
</script>
