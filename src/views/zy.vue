<template>
        <div style="text-align:center">
                <form>
                        <div class="name" style="padding: 10px">
                                <el-input required type=text v-model="input" placeholder="请输入你的名字" style="width: 400px"></el-input>
                                <el-button @click="sure">确定</el-button>
                        </div>
                </form>
                <div>

                        <el-button id="surprise" plain @click="surprise">
                                a surprise
                        </el-button>
                </div>
                <div>
                        <el-carousel :interval="4000" type="card" height="200px">
                                <el-carousel-item>
                                        <img class="img" src="../img/1.jpg">
                                </el-carousel-item>

                                <el-carousel-item>
                                        <img class="img" src="../img/2.jpg">
                                </el-carousel-item>

                                <el-carousel-item>
                                        <img class="img" src="../img/3.jpg">
                                </el-carousel-item>
                        </el-carousel>
                </div>
        </div>

</template>

<script>
                        
        export default{
                data() {
                        return {
                                input: '',
                                out: '',
                        }
                },
                methods: {
                        surprise() {
                                const h = this.$createElement;
                                this.$notify({
                                        title: 'I',
                                        message: h('i', 'hid a surprise in your computer'),
                                        position: 'top-left',

                                });
                        },
                        //确定函数，判断人名
                        sure() {
                                if (this.input === '宋雨蔚') {
                                        this.open();
                                }
                                else if (this.input === '何源') {
                                        this.$message({
                                                type: 'info',
                                                message: '笨蛋，这是我',
                                        });
                                }
                                else {
                                        this.open2();
                                }
                        },
                        //打开函数
                        open() {
                                this.$alert('你肯定就是我的宝贝小宋啦', '小宋', {
                                        confirmButtonText: '确定',
                                        callback: action => {
                                                this.$message({
                                                        type: 'info',
                                                        message: '小宋，我喜欢你啊'
                                                });
                                        }
                                });
                        },
                        //打开函数2
                        open2() {
                                if (this.input != '') {
                                        this.$message({
                                                type: 'info',
                                                message: '抱歉，' + this.input,
                                        });
                                } else {
                                        this.$message({
                                                type: 'info',
                                                message: '抱歉',
                                        });
                                }

                        },
                }
        
        }        
</script>
<style>
        .el-carousel__item h3 {
                color: #475669;
                font-size: 14px;
                opacity: 0.75;
                line-height: 200px;
                margin: 0;
                text-align: center;
        }

        .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
        }

        .img {
                width: 100%;
                height: auto;
                max-width: 100%;
                display: block;
        }
</style>