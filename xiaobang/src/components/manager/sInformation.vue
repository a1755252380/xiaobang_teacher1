<template>
  <div class="information_container">
    <el-card class="ability_ranking">
      <h1>学生能力排行榜</h1>
      <el-table style="width: 100%" :data="stuList" @row-click="openDetails">
        <el-table-column type="index" :index="1"> </el-table-column>
        <el-table-column prop="imgSrc" width="180">
          <template slot-scope="scope">
            <el-avatar :size="35" :src="scope.row.imgSrc"></el-avatar>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="score" label="进度" width="180">
          <template slot-scope="scope">
            <!-- <el-rate
              v-model="scope.row.score"
              disabled
              show-score
              text-color="#F44336"
              :score-template="scope.row.score"
             :colors="['#F44336', '#F44336', '#F44336']"
            >
            </el-rate> -->
            <el-progress
              type="line"
              color="#2196F3"
              :percentage="scope.row.score"
            ></el-progress>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="right_container">
      <el-card class="today_class">
        <h1>今日课堂</h1>
        <el-card class="today_class_card">
          <div class="class_time">
            <i class="el-icon-time"></i><span>时间：</span
            ><span>14：00-16：00</span>
          </div>
          <div class="class_name">
            <i class="el-icon-notebook-2"></i><span>课程名称：</span
            ><span>请弹吧（用右手）</span>
          </div>
          <div class="teacher_name">
            <i class="el-icon-user"></i><span>授课老师：</span
            ><span>维贾君</span>
          </div>
          <div class="classroom_name">
            <i class="el-icon-house"></i><span>地点：</span><span>C3教室</span>
          </div>
        </el-card>
        <el-card class="today_class_card">
          <div class="class_time">
            <i class="el-icon-time"></i><span>时间：</span
            ><span>18：00-20：00</span>
          </div>
          <div class="class_name">
            <i class="el-icon-notebook-2"></i><span>课程名称：</span
            ><span>请弹吧（用左手）</span>
          </div>
          <div class="teacher_name">
            <i class="el-icon-user"></i><span>授课老师：</span
            ><span>吴克其</span>
          </div>
          <div class="classroom_name">
            <i class="el-icon-house"></i><span>地点：</span><span>C2教室</span>
          </div>
        </el-card>
        <el-pagination layout="prev, pager, next" :total=5> </el-pagination>
      </el-card>
      <el-card class="practicing_card">
        <h1>练琴中</h1>
        <el-card
          class="stu_card"
          body-style="display:flex; justify-content: start;"
        >
          <template v-for="item in stuList">
            <div class="stu_container" :key="item.id" v-if="item.isPlay">
              <el-avatar :size="120" :src="item.imgSrc" ></el-avatar>
              <p>{{ item.name }}</p>
            </div>
          </template>
        </el-card>
        <el-pagination
          layout="prev, pager, next"
          :page-size=5
          :total="stuList.length"
        >
        </el-pagination>
      </el-card>
    </div>
  </div>
</template>
<style scoped>
h1 {
  font-size: 20px;
  text-align: start;
}

.information_container {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.ability_ranking {
  width: 40;
  height: 98%;
}
.right_container {
  flex: 3;
  margin-left: 2%;
}
.today_class_card {
  width: 100%;
  margin-top: 7px;
}
.today_class {
  width: 100%;
  height: 55%;
  text-align: start;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 3%;
}
.today_class i {
  font-size: 20px;
  margin-right: 10px;
}

.class_time,
.class_name,
.teacher_name,
.classroom_name {
  font-size: 18px;
}
.class_time span:nth-child(3),
.class_name span:nth-child(3),
.teacher_name span:nth-child(3),
.classroom_name span:nth-child(3) {
  margin-left: 5px;
  font-size: 20px;
  color: #7a2323;
}
.el-pagination {
  margin-top: 10px;
}
/* .point {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #D32F2F;
    margin-right: 25px;
    margin-left: 15px;
} */
.practicing_card {
  text-align: start;
  width: 100%;
  height: 39%;
}
.stu_card {
  width: 98%;
  height: 100%;
  margin-top: 15px;
  text-align: center;
}
.stu_container {
  text-align: center;
  cursor: pointer;
  width: 20%;
}
</style>
<script>
export default {
  name: "hello",
  data() {
    return {
      stuList: [
        {
          id: 1,
          imgSrc:
            require("../../assets/images/student/1.jpg"),
          name: "魏佳君",
          score: 98,
          isPlay: false,
        },
        {
          id: 2,
          imgSrc:
           require("../../assets/images/student/2.jpg"),
          name: "黄柏枝",
          score: 97,
          isPlay: true,
        },
        {
          id: 3,
          imgSrc:
           require("../../assets/images/student/3.jpg"),
          name: "柯娜娜",
          score: 80,
          isPlay: true,
        },
        {
          id: 4,
          imgSrc:
            require("../../assets/images/student/4.jpg"),
          name: "龙威生",
          score: 75,
          isPlay: true,
        },
        {
          id: 5,
          imgSrc:
           require("../../assets/images/student/5.jpg"),
          name: "蔡小洪",
          score: 72,
          isPlay: true,
        },
        {
          id: 6,
          imgSrc:
            require("../../assets/images/student/6.jpg"),
          name: "吴正达",
          score: 71,
          isPlay: true,
        },
      ],
    };
  },
  methods:{
    openDetails(row){
      const {id} = row
      this.$router.push("/teacher/studentDetails/"+id)
    }
  }
  //   mounted() {
  //     this.drawLine();
  //   },
  //   methods: {
  //     drawLine() {
  //       // 基于准备好的dom，初始化echarts实例myChart
  //       let myChart = this.$echarts.init(document.getElementById("myChart"));
  //       // 绘制图表
  //       myChart.setOption({
  //         title: { text: "在Vue中使用echarts" },
  //         tooltip: {},
  //         xAxis: {
  //           data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  //         },
  //         yAxis: {},
  //         series: [
  //           {
  //             name: "销量",
  //             type: "bar",
  //             data: [5, 20, 36, 10, 10, 20],
  //           },
  //         ],
  //       });
  //     },
  //   },
};
</script>
