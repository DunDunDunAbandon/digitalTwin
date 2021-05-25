<template>
  <div class="firstpage">
    <div id="room" style="position:fixed;z-index:0"></div>
    
    <!-- <el-row style="z-index:1">
      <el-button type="info" @click="sceneAdd">加载</el-button>
      <el-button type="warning" @click="sceneRemove">卸载</el-button>
      <el-button type="primary" @click="modelHide">隐藏</el-button>
      <el-button type="success" @click="modelShow">显示</el-button>
      <el-button type="info" @click="Virtualization">虚化</el-button>
      <el-button type="warning" @click="highLight">高亮</el-button>
      <el-button type="primary" @click="modelHigh">突出</el-button>
      <el-button type="success" @click="goto">定位</el-button>
      <el-button type="info" @click="modelAdd">添加</el-button>
      <el-button type="warning" @click="modelRemove">删除</el-button>
      <el-button type="primary" @click="capacityDisplay">容量显示</el-button>
      <el-button type="success" @click="linePipe">管线</el-button>
      <el-button type="info" @click="drawer = true">抽屉</el-button>
      <el-button type="warning" @click="find">寻找0模型</el-button>
    </el-row> -->
    <el-row style="z-index:1">
      <el-col :span="4" style="height:3vw"><p class="title">机 房 数 字 孪 生 系 统</p></el-col>
      <el-col :span="12" style="height:3vw"><p class="time">{{date|formatDate}}</p></el-col>
    </el-row>

    
    <el-row style="width:22vw;backdrop-filter: blur(5px);">


      <el-row style="z-index:1;width:100%;margin-bottom:0.5vw;" class="menu1">
        <el-menu 
          :default-active="activeIndex" 
          class="el-menu-demo" 
          mode="horizontal" 
          @select="handleSelect"

          background-color=rgba(108,146,140,0)
          text-color="#596D68"
          active-text-color="#A7C7BD"
        >
          <el-menu-item index="1">概 览</el-menu-item>
          <el-menu-item index="2">索 引</el-menu-item>
          <el-menu-item index="3">安 全 防 疫</el-menu-item>
        </el-menu>
      </el-row>

      <el-row style="z-index:1;width:100%;margin-bottom:0.5vw;margin-left: 0.5vw;height:3.5vw" class="menu2">
          <el-menu style="height:3.5vw"
            :default-active="activeIndex2" 
            class="el-menu-demo" 
            mode="horizontal" 
            @select="handleSelect2"

            background-color=rgba(108,146,140,0)
            text-color="#596D68"
            active-text-color="#A7C7BD"
          >
            <el-menu-item index="1"><i class="el-icon-video-camera" style="display:block"></i><p style="font-size:0.1vw;line-height:0.7vw">监控</p></el-menu-item>
            <el-menu-item index="2"><i class="el-icon-lock" style="display:block"></i><p style="font-size:0.1vw;line-height:0.7vw">门禁</p></el-menu-item>
            <el-menu-item index="3"><i class="el-icon-timer" style="display:block"></i><p style="font-size:0.1vw;line-height:0.7vw">温湿度</p></el-menu-item>
            <el-menu-item index="4"><i class="el-icon-school" style="display:block"></i><p style="font-size:0.1vw;line-height:0.7vw">消防</p></el-menu-item>
            <el-menu-item index="5"><i class="el-icon-pie-chart" style="display:block"></i><p style="font-size:0.1vw;line-height:0.7vw">容量</p></el-menu-item>
            <el-menu-item index="6"><i class="el-icon-s-help" style="display:block"></i><p style="font-size:0.1vw;line-height:0.7vw">能耗</p></el-menu-item>
          </el-menu>
      </el-row>

      <el-row style="z-index:1;width:80%">
        <!-- 概览 -->
        <el-col :span="24" class="sidebar" v-show="gl_visible">
          <el-scrollbar style="height:35vw">
<div>
            <div class="subtitle">
              <p>容量管理</p>
            </div>

            <div class="sstitle">
              <p class="p1">储存总容量</p>
              <p class="p2">240(T)</p>
            </div>
            <div class="ssscontentAll">
              <div class="ssscontentLeft">
                <div class="ssstitle">
                  <p class="pp1">已使用容量</p>
                  <p class="pp2">100(T)</p>
                </div>
                <dv-percent-pond :config="storeUsed" class="dataV-percent"/>
              </div>
              <div class="ssscontentRight">
                <div class="ssstitle">
                  <p class="pp1">未使用容量</p>
                  <p class="pp2">140(T)</p>
                </div>
                <dv-percent-pond :config="storeUnused" class="dataV-percent"/>
              </div>
            </div>

            <div class="sstitle">
              <p class="p1">U位空间总量</p>
              <p class="p2">450(U)</p>
            </div>
            <div class="ssscontentAll">
              <div class="ssscontentLeft">
                <div class="ssstitle">
                  <p class="pp1">U位已使用</p>
                  <p class="pp2">300(U)</p>
                </div>
                <dv-percent-pond :config="UUsed" class="dataV-percent"/>
              </div>
              <div class="ssscontentRight">
                <div class="ssstitle">
                  <p class="pp1">U位未使用</p>
                  <p class="pp2">150(U)</p>
                </div>
                <dv-percent-pond :config="UUnused" class="dataV-percent"/>
              </div>
            </div>

            <div class="sstitle">
              <p class="p1">机位总容量</p>
              <p class="p2">140</p>
            </div>
            <div class="ssscontentAll">
              <div class="ssscontentLeft">
                <div class="ssstitle">
                  <p class="pp1">已使用机位</p>
                  <p class="pp2">70</p>
                </div>
                <dv-percent-pond :config="placeUsed" class="dataV-percent"/>
              </div>
              <div class="ssscontentRight">
                <div class="ssstitle">
                  <p class="pp1">未使用机位</p>
                  <p class="pp2">70</p>
                </div>
                <dv-percent-pond :config="placeUnused" class="dataV-percent"/>
              </div>
            </div>
            
            <div class="sstitle">
              <p class="p1">总功耗</p>
              <p class="p2">78(KW)</p>
            </div>
            <div class="ssscontentAll">
              <div class="ssscontentLeft">
                <div class="ssstitle">
                  <p class="pp1">已使用功耗</p>
                  <p class="pp2">58(KW)</p>
                </div>
                <dv-percent-pond :config="powerUsed" class="dataV-percent"/>
              </div>
              <div class="ssscontentRight">
                <div class="ssstitle">
                  <p class="pp1">未使用功耗</p>
                  <p class="pp2">20(KW)</p>
                </div>
                <dv-percent-pond :config="powerUnused" class="dataV-percent"/>
              </div>
            </div>

            <div class="subtitle">
              <p>动环系统</p>
            </div>
            <div class="sstitle">
              <p class="p1">温度</p>
              <p class="p2">26(℃)</p>
            </div>
            <dv-percent-pond :config="temperature" class="dataV-percent"/>
            <div class="sstitle">
              <p class="p1">湿度</p>
              <p class="p2">35(%))</p>
            </div>
            <dv-percent-pond :config="humidity" class="dataV-percent"/>
            <div class="sstitle">
              <p class="p1">UPS</p>
              <p class="p2">465(VA)</p>
            </div>
            <dv-percent-pond :config="ups" class="dataV-percent"/>

            <div class="sstitle">
              <p class="p1">配电柜</p>
            </div>
            <DistributionBox />
            <!-- <div id="distributionBox"></div> -->
            
            <div class="sstitle">
              <p class="p1">门禁</p>
            </div>
</div>
          </el-scrollbar>
        </el-col>

        <!-- 索引 -->
        <el-col :span="24" class="sidebar" v-show="sy_visible">
          <el-scrollbar style="height:35vw">

            <el-input style="margin:0.5vw 0"
              placeholder="  "
              suffix-icon="el-icon-search"
              v-model="input1">
            </el-input>

            <div class="subtitle">
              <p>设备索引</p>
            </div>
            
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="width:100px"></el-tree>
          </el-scrollbar>
        </el-col>

        <!-- 安全防疫 -->
        <el-col :span="24" class="sidebar" v-show="aqfy_visible">
            <div class="subtitle">
              <p>安全防疫</p>
            </div>
            <div class="subtitle2">
              <p>点击跳转</p>
            </div>
            <div class="subtitle">
              <p>健康防检</p>
            </div>
            <div class="subtitle2">
              <p>点击跳转</p>
            </div>
        </el-col>

        <!-- 监控 -->
        <el-col :span="24" class="sidebar" v-show="jk_visible">
          监控
          <!-- <div class="box">
            <div id="Player"></div>
          </div> -->
        </el-col>

        <!-- 巡检 -->
        <el-col :span="24" class="sidebar" v-show="xj_visible">
          巡检
        </el-col>

        <!-- 门禁 -->
        <el-col :span="24" class="sidebar" v-show="mj_visible">
          门禁
        </el-col>

        <!-- 温湿度 -->
        <el-col :span="24" class="sidebar" v-show="wsd_visible">
          温湿度
        </el-col>

        <!-- 消防 -->
        <el-col :span="24" class="sidebar" v-show="xf_visible">
          消防
        </el-col>

        <!-- 容量 -->
        <el-col :span="24" class="sidebar" v-show="rl_visible">
          容量
        </el-col>

        <!-- 能耗 -->
        <el-col :span="24" class="sidebar" v-show="nh_visible">
          能耗
        </el-col>
      </el-row>


    </el-row>


  </div>
</template>

<script>
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {CubeTextureLoader} from 'three/src/loaders/CubeTextureLoader'

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js"

import TWEEN from '@tweenjs/tween.js'
import {TweenLite} from 'gsap'

import gltfjson from '@/assets/json/gltf.json'

import DistributionBox from './distributionBox.vue'

var model;
var opacityFlag=false;
var highlightFlag=false;
var texture;
var padDate=function(value){//在月份、日期、小时等小于10时在前面补0
  return value<10?'0'+value:value;
}

const fullWidth = 200
const borderGap = 0
const borderWidth = 0
const usefulWidth = fullWidth - (borderGap + borderWidth) * 2

const pieceLength = [1, 1, 1]
const pieceGap = 1
const lineDash = pieceLength
  .map(l => [usefulWidth * l, pieceGap])
  .reduce((all, current) => [...all, ...current], [])


export default {
  name: 'DigitalTwin',
  components: {
    DistributionBox
  },
  data () {
    return {
      player: '',
      url: 'http://192.168.100.101:10800/flv/hls/stream_1.flv',

      storeUsed:{
        value: 50,
        colors: ['#56746A', '#56746A'],
        borderRadius: 0,
        borderWidth: 1,
        lineDash
      },
      storeUnused:{
        value: 140/240*100,
        colors: ['#56746A', '#56746A'],
        borderRadius: 0,
        borderWidth: 1,
        lineDash
      },
      UUsed:{
        value: 300/450*100,
        colors: ['#56746A', '#56746A'],
        borderRadius: 0,
        borderWidth: 1,
        lineDash
      },
      UUnused:{
        value: 150/450*100,
        colors: ['#56746A', '#56746A'],
        borderRadius: 0,
        borderWidth: 1,
        lineDash
      },
      placeUsed:{
        value: 50,
        colors: ['#56746A', '#56746A'],
        borderRadius: 0,
        borderWidth: 1,
        lineDash
      },
      placeUnused:{
        value: 50,
        colors: ['#56746A', '#56746A'],
        borderRadius: 0,
        borderWidth: 1,
        lineDash
      },
      powerUsed:{
        value: 58/78*100,
        colors: ['#56746A', '#56746A'],
        borderRadius: 0,
        borderWidth: 1,
        lineDash
      },
      powerUnused:{
        value: 20/78*100,
        colors: ['#56746A', '#56746A'],
        borderRadius: 0,
        borderWidth: 1,
        lineDash
      },
      temperature:{
        value: 26,
        colors: ['#56746A', '#56746A'],
        borderRadius: 0,
        borderWidth: 1,
        lineDash
      },
      humidity:{
        value: 35,
        colors: ['#56746A', '#56746A'],
        borderRadius: 0,
        borderWidth: 1,
        lineDash
      },
      ups:{
        value: 70,
        colors: ['#56746A', '#56746A'],
        borderRadius: 0,
        borderWidth: 1,
        lineDash
      },
      gl_visible: true,
      sy_visible: false,
      aqfy_visible: false,
      jk_visible: false,
      xj_visible: false,
      mj_visible: false,
      wsd_visible: false,
      xf_visible: false,
      rl_visible: false,
      nh_visible: false,

      activeIndex: '1',
      activeIndex2:'1',
      date:new Date(),//Date继承自Object对象，此对象提供操作日期与时间的函数
      ruleForm:{
        username:'1',
        password:'1'
      },
      scene:null,
      camera:null,
      renderer:null,
      controls:null,
      mouse:null,
      raycaster:null,
      intersects:null,
      pointer:null,
      modelArr:[],//存放基础房屋和基础机柜机架信息
      objects:[],//存放基础房屋和基础机柜机架mesh以射线检测

      composer: null,
      outlinePass: null,
      renderPass: null,

      modelNumber:'',
      sprite:null,
      data: [{
        label: '一级',
        children: [{
          label: '二级',
          children: [{
            label: '三级'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      drawer:false,
      input1:'',
      gltf:'',
    }
  },

  filters:{//过滤器
    formatDate:function(value){//value为需要过滤的数据
      var date=new Date();
      var year=date.getFullYear();
      var month=padDate(date.getMonth()+1);
      var day=padDate(date.getDay());
      var hours=padDate(date.getHours());
      var minutes=padDate(date.getMinutes());
      var seconds=padDate(date.getSeconds());
      //整理数据并返回
      return year+'-'+month+'-'+day+'  |  '+hours+':'+minutes+':'+seconds;
    }
  },

  mounted(){
    // 实例化播放器
    // this.player = new WasmPlayer(null, 'Player', this.callbackfun)
    // 调用播放
    // this.player.play(this.url, 1)

    var _this=this;//声明一个变量指向vue实例this,保证作用域一致
    this.timer=setInterval(function(){
      _this.date=new Date();//修改数据date
    },1000);
    // this.$axios.post('/model',this.ruleForm)
    // .then((response)=>{
    //   this.m=response.data.data.slice(0);
    // }).catch((response)=>{
    //   // console.log(response)
    // })

    this.gltf = this.loadAll();
    this.Init();
    this.camera.aspect=window.innerWidth/window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth,window.innerHeight)

    let that=this;
    window.addEventListener('resize',onWindowResize,false);
    room.addEventListener('click',this.InitRaycaster)
    function onWindowResize(){//回调函数不能用this
      that.camera.aspect=window.innerWidth/window.innerHeight;
      that.camera.updateProjectionMatrix();
      that.renderer.setSize(window.innerWidth,window.innerHeight)
    }
  },
  beforeDestroy(){
    if(this.timer){
      clearInterval(this.timer);//在vue实例销毁前，清除定时器
    }
  },

  methods:{
    // callbackfun(e) {
    //   console.log('callbackfun', e);
    // },
    handleSelect(key, keyPath) {
      if(key==1){
        this.gl_visible=true;
        this.sy_visible=false;
        this.aqfy_visible=false
        this.jk_visible=false
        this.xj_visible=false;
        this.mj_visible=false;
        this.wsd_visible=false;
        this.xf_visible=false;
        this.rl_visible=false;
        this.nh_visible=false;
      }else if(key==2){
        this.gl_visible=false;
        this.sy_visible=true;
        this.aqfy_visible=false
        this.jk_visible=false
        this.xj_visible=false;
        this.mj_visible=false;
        this.wsd_visible=false;
        this.xf_visible=false;
        this.rl_visible=false;
        this.nh_visible=false;
      }else if(key==3){
        this.gl_visible=false;
        this.sy_visible=false;
        this.aqfy_visible=true
        this.jk_visible=false
        this.xj_visible=false;
        this.mj_visible=false;
        this.wsd_visible=false;
        this.xf_visible=false;
        this.rl_visible=false;
        this.nh_visible=false;
      }
    },
    handleSelect2(key, keyPath){
      // console.log(key)
      switch(key){
        case "1":
          this.gl_visible=false;
          this.sy_visible=false;
          this.aqfy_visible=false
          this.jk_visible=true
          this.xj_visible=false;
          this.mj_visible=false;
          this.wsd_visible=false;
          this.xf_visible=false;
          this.rl_visible=false;
          this.nh_visible=false;
          break;
        case "2":
          this.gl_visible=false;
          this.sy_visible=false;
          this.aqfy_visible=false
          this.jk_visible=false
          this.xj_visible=false;
          this.mj_visible=true;
          this.wsd_visible=false;
          this.xf_visible=false;
          this.rl_visible=false;
          this.nh_visible=false;
          break;
        case "3":
          this.gl_visible=false;
          this.sy_visible=false;
          this.aqfy_visible=false
          this.jk_visible=false
          this.xj_visible=false;
          this.mj_visible=false;
          this.wsd_visible=true;
          this.xf_visible=false;
          this.rl_visible=false;
          this.nh_visible=false;
          break;
        case "4":
          this.gl_visible=false;
          this.sy_visible=false;
          this.aqfy_visible=false
          this.jk_visible=false
          this.xj_visible=false;
          this.mj_visible=false;
          this.wsd_visible=false;
          this.xf_visible=true;
          this.rl_visible=false;
          this.nh_visible=false;
          break;
        case "5":
          this.gl_visible=false;
          this.sy_visible=false;
          this.aqfy_visible=false
          this.jk_visible=false
          this.xj_visible=false;
          this.mj_visible=false;
          this.wsd_visible=false;
          this.xf_visible=false;
          this.rl_visible=true;
          this.nh_visible=false;
          break;
        case "6":
          this.gl_visible=false;
          this.sy_visible=false;
          this.aqfy_visible=false
          this.jk_visible=false
          this.xj_visible=false;
          this.mj_visible=false;
          this.wsd_visible=false;
          this.xf_visible=false;
          this.rl_visible=false;
          this.nh_visible=true;
          break;
        default:
          break;
      }
    },
    searchHandle() {
      if(this.autocompleteFocusFlag) this.$refs.autocomplete.activated = true;
    },
    createFilter(queryString) {
      return (car) => {
        return (car.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        { "value": "0"},
        { "value": "1" },
        { "value": "2" }
      ];
    },
    Init(){

      //init Scene
      this.InitScene()
      //init Camera
      this.InitCamera()
      //init Light
      this.InitLight()
      //网格轴
      this.InitGridHelper()
      //物体
      this.InitGltf()
      //机柜
      this.initjg()
      //机架
      this.initjj()
      //init Renderer
      this.InitRender()
      //init controls
      this.InitControls()

      //update
      this.Update();
    },

    InitScene(){
      this.scene=new THREE.Scene();
      // var textureLoader=new THREE.TextureLoader();
      // var texture=textureLoader.load('./static/background.png');
      //天空盒
      // this.scene.background=new THREE.CubeTextureLoader()
      // .setPath('./static/')
      // .load(['3.png','6.png','2.png','1.png','4.png','5.png']);
      this.scene.background=new THREE.Color(0x252D30);
    },

    InitCamera(){

      this.camera=new THREE.PerspectiveCamera(25,window.clientWidth/window.clientHeight,1,300);
      this.camera.position.set(-30,40,-80);

      let light3=new THREE.DirectionalLight(0xffffff,2,50);
      light3.castShadow = true;
      light3.shadow.mapSize.width=1024;
      light3.shadow.mapSize.height=1024;
      //决定了有多少像素用来生成阴影，有马赛克阴影时可以调试这俩
      light3.shadow.mapSize.width = 1024; // default
      light3.shadow.mapSize.height = 1024; // default
      light3.shadow.camera.near = 0.5; // default
      light3.shadow.camera.far = 500; // default
      light3.shadow.radius = 2;//该值大于1时，阴影的边缘将有平滑效果

      // const helper=new THREE.DirectionalLightHelper(light3,1)
      // this.scene.add(helper)
      this.camera.add(light3)
      this.scene.add(this.camera)
      
      const planeGeometry = new THREE.PlaneGeometry( 10, 10, 22);
      const planeMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff } )
      const plane = new THREE.Mesh( planeGeometry, planeMaterial );
      plane.rotation.x -= Math.PI * 0.5;
      plane.receiveShadow = true;
      // this.scene.add( plane );
    },

    InitControls(){
      this.controls=new OrbitControls(this.camera,this.renderer.domElement);
      this.controls.target.set(10,0,-10)
      this.controls.listenToKeyEvents(window);
      this.controls.enableDamping=true;
      this.controls.keys = {
        LEFT: 'KeyA', //left arrow
        UP: 'KeyW', // up arrow
        RIGHT: 'KeyD', // right arrow
        BOTTOM: 'KeyS' // down arrow
      }
      // this.controls.target.set(0,0.5,3)
    },
    InitLight(){
      let light0=new THREE.AmbientLight(0xfafafa,0.25);

      let light1=new THREE.AmbientLight(0xffffff,0.4);
      light1.position.set(200,90,40);

      let light2=new THREE.AmbientLight(0xffffff,0.4);
      light1.position.set(200,90,-40);

      // var light4=new THREE.DirectionalLight(0xff0040,2,50);
      // const sphere=new THREE.SphereGeometry(0.5,16,8)
      // light4.add(new THREE.Mesh(sphere,new THREE.MeshBasicMaterial({color:0xff0040})))
      // light4.position.set(5,2,2);
      //给光添加阴影。在Three.js中，能形成阴影的光源只有THREE.DirectionalLight与THREE.SpotLight；而相对地，能表现阴影效果的材质只有THREE.LambertMaterial与THREE.PhongMaterial。
      // light4.castShadow = true;

      // this.scene.add(light0);
      // this.scene.add(light1);
      // this.scene.add(light2);
    },

    InitGridHelper(){
      // let gh=new THREE.GridHelper(60,160,new THREE.Color(0x555555),new THREE.Color(0x333333));
      // this.scene.add(gh);
      var axesHelper = new THREE.AxesHelper( 150 );
      // 和网格模型Mesh一样，AxesHelper你也可以理解为一个模型对象，需要插入到场景中
      this.scene.add( axesHelper );
    },

    InitRender(){
      this.renderer=new THREE.WebGLRenderer({antialias:true});
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth,window.innerHeight);

      room.appendChild(this.renderer.domElement);
      //开启阴影计算
      this.renderer.shadowMap.enabled = true;
    },

    //加载基础房屋和基础机柜机架
    LoaderGltf(name,name2,path,scale,x,y,z){
      let that=this;
      var loader = new GLTFLoader();
      loader.load( path, function ( gltf ) {
        model=gltf.scene
        model.rotation.y -= Math.PI / 2;
        that.modelArr.push(model)
        model.name=name
        //若搜索条件有多个可以在此添加属性，如home
        model.home=name2
        //机柜和机架要旋转180度
        if(model.name==3||model.name==4||model.name==5||model.name==6||model.name==15){
          model.rotation.y = Math.PI;
        }
        that.scene.add( model );
        model.traverse(function (child) {
          if (child.isMesh) {
            //设置mesh的一些属性
            child.name=name
            child.home=name2
            child.castShadow = true;
            // child.receiveShadow = true;
            that.objects.push(child)
            // child.material.color.setHex(0xff4500)
          }
        }); 
        //设置整体场景的比例
        // console.log(model.position)
        model.scale.set(scale, scale, scale);
        model.position.set(x,y,z)
        },undefined,function(error){
          console.error(error);
        })
    },

    // async InitGltf(){
    //   const {data:res}=await this.$axios.post('/model',this.ruleForm)
    //   this.modelSql=res.data.slice(0);
    //   for(let i=0;i<this.modelSql.length;i++){
    //     this.LoaderGltf(this.modelSql[i].id,this.modelSql[i].name,this.modelSql[i].path,this.modelSql[i].scale,this.modelSql[i].x,this.modelSql[i].y,this.modelSql[i].z)
    //   }
    // },

    //从json读取房屋和机柜机架信息，因为是定死的所以放在json
    InitGltf(){
      for(let i=0;i<gltfjson.length;i++){
        this.LoaderGltf(gltfjson[i].id,gltfjson[i].name,gltfjson[i].path,gltfjson[i].scale,gltfjson[i].x,gltfjson[i].y,gltfjson[i].z)
      }
    },

    //  三个机柜，从一个复制其他两个
    initjg(){
      setTimeout(()=>{
        for(let i=0;i<this.modelArr.length;i++){
              if(this.modelArr[i].name==3){
                var jg2=this.modelArr[i].clone()
                jg2.position.set(22,0,4)//x+4
                jg2.name=4
                this.scene.add(jg2)
                var jg3=this.modelArr[i].clone()
                jg3.position.set(26,0,4)
                jg3.name=5
                this.scene.add(jg3)
                this.modelArr.push(jg2)
                this.modelArr.push(jg3)
              }
        }
      },1500)
    },

    //机架，从每排第一个复制每排剩余
    initjj(){
      let that=this;
      setTimeout(()=>{

        for(let i=0;i<this.modelArr.length;i++){
          //第一排机柜的机架
          if(this.modelArr[i].name==6){
            for(let k=0;k<8;k++){
              var jjCopy=this.modelArr[i].clone()
              jjCopy.position.z-=0.6*(k+1)
              jjCopy.name=7+k
              this.scene.add(jjCopy)
              that.modelArr.push(jjCopy)
              jjCopy.traverse(function (child) {
                if (child.isMesh) {
                  child.name=7+k
                  child.castShadow = true;
                  that.objects.push(child)
                }
              }); 
            }
          }
          //第二排机柜的机架
          if(this.modelArr[i].name==15){
            for(let k=0;k<8;k++){
              var jjCopy=this.modelArr[i].clone()
              jjCopy.position.z-=0.6*(k+1)
              jjCopy.name=16+k
              this.scene.add(jjCopy)
              that.modelArr.push(jjCopy)

              jjCopy.traverse(function (child) {
                if (child.isMesh) {
                  child.name=16+k
                  child.castShadow = true;
                  that.objects.push(child)
                }
              }); 
            }
          }
          //第三排机柜的机架
          if(this.modelArr[i].name==6){
            for(let k=0;k<9;k++){
              var jjCopy=this.modelArr[i].clone()
              jjCopy.position.x=22
              jjCopy.position.z-=0.6*k
              jjCopy.name=24+k
              this.scene.add(jjCopy)
              that.modelArr.push(jjCopy)
              jjCopy.traverse(function (child) {
                if (child.isMesh) {
                  child.name=24+k
                  child.castShadow = true;
                  that.objects.push(child)
                }
              }); 
            }
          }
          //第四排机柜的机架
          if(this.modelArr[i].name==15){
            for(let k=0;k<9;k++){
              var jjCopy=this.modelArr[i].clone()
              jjCopy.position.x=22
              jjCopy.position.z-=0.6*k
              jjCopy.name=33+k
              this.scene.add(jjCopy)
              that.modelArr.push(jjCopy)

              jjCopy.traverse(function (child) {
                if (child.isMesh) {
                  child.name=33+k
                  child.castShadow = true;
                  that.objects.push(child)
                }
              }); 
            }
          }
          //第五排机柜的机架
          if(this.modelArr[i].name==6){
            for(let k=0;k<9;k++){
              var jjCopy=this.modelArr[i].clone()
              jjCopy.position.x=26
              jjCopy.position.z-=0.6*k
              jjCopy.name=42+k
              this.scene.add(jjCopy)
              that.modelArr.push(jjCopy)
              jjCopy.traverse(function (child) {
                if (child.isMesh) {
                  child.name=42+k
                  child.castShadow = true;
                  that.objects.push(child)
                }
              }); 
            }
          }
          //第六排机柜的机架
          if(this.modelArr[i].name==15){
            for(let k=0;k<9;k++){
              var jjCopy=this.modelArr[i].clone()
              jjCopy.position.x=26
              jjCopy.position.z-=0.6*k
              jjCopy.name=51+k
              this.scene.add(jjCopy)
              that.modelArr.push(jjCopy)

              jjCopy.traverse(function (child) {
                if (child.isMesh) {
                  child.name=51+k
                  child.castShadow = true;
                  that.objects.push(child)
                }
              }); 
            }
          }
        }
        
      },1500)
    },

    //把所有基础物体都隐藏掉
    modelUnvisible(){
      for(let i=0;i<this.modelArr.length;i++){
        this.modelArr[i].traverse(function (child) {
          if (child.isMesh) {
            //设置mesh的一些属性
            child.visible=false
          }
        });
      }
    },

    //点击右排机柜
    jjSelectorRight(SelectStart,SelectEnd){
      for(let i=SelectStart;i<SelectEnd;i++){
        if(this.intersects[0].object.name==i){
          this.modelUnvisible();

          for(let m=0;m<this.modelArr.length;m++){
            if(this.modelArr[m].name==this.intersects[0].object.name){
              //相机飞
              this.gotoRight(this.camera.position,this.modelArr[m].position,this.controls.target,this.modelArr[m].position)
            }
            for(let n=SelectStart;n<SelectEnd;n++){
              if(this.modelArr[m].name==n){
                this.modelArr[m].traverse(function (child) {
                  if (child.isMesh) {
                    //设置mesh的一些属性
                    child.visible=true
                  }
                });
              }
            }
          }
        }
      }
    },

    //点击左排机柜
    jjSelectorLeft(SelectStart,SelectEnd){
      for(let i=SelectStart;i<SelectEnd;i++){
        if(this.intersects[0].object.name==i){
          this.modelUnvisible();

          for(let m=0;m<this.modelArr.length;m++){
            if(this.modelArr[m].name==this.intersects[0].object.name){
              //相机飞
              this.gotoLeft(this.camera.position,this.modelArr[m].position,this.controls.target,this.modelArr[m].position)
            }
            for(let n=SelectStart;n<SelectEnd;n++){
              if(this.modelArr[m].name==n){
                this.modelArr[m].traverse(function (child) {
                  if (child.isMesh) {
                    //设置mesh的一些属性
                    child.visible=true
                  }
                });
              }
            }
          }
        }
      }
    },

    InitRaycaster(event){
      this.raycaster=new THREE.Raycaster()
      this.pointer=new THREE.Vector2()
      let normalizedX = (event.clientX / window.innerWidth - 0.5) * 2;
      let normalizedY = ( - event.clientY / window.innerHeight + 0.5) * 2;
      this.pointer.set( normalizedX, normalizedY );
      this.raycaster.setFromCamera( this.pointer, this.camera );

      this.intersects = this.raycaster.intersectObjects(this.objects,true);
      // var intersects = this.raycaster.intersectObjects(this.scene.children,true);
      console.log(this.intersects[0].object.name)
      // console.log(this.objects)
      
      // if(this.intersects[0].object.name==999){
      //   for(let i=0;i<this.modelArr.length;i++){
      //     if(this.modelArr[i].name=999){
      //       console.log(this.modelArr[i])
      //     }
      //   }
      // }




      //除选中元素外其他元素均从数组中移除
      this.jjSelectorLeft(6,15)
      this.jjSelectorRight(15,24)

      this.jjSelectorLeft(24,33)
      this.jjSelectorRight(33,42)
      
      this.jjSelectorLeft(42,51)
      this.jjSelectorRight(51,60)

      //点击房顶隐藏并相机飞
      for(let i=0;i<this.intersects.length;i++){
        if(this.intersects[i].object.home=="roof"){
          for(let i=0;i<this.objects.length;i++){
            if(this.objects[i].home=="roof"){
              this.objects.splice(i,1);
            }
          }
          //卸载房顶，不然射线仍能识别。要把objects里的数组也去掉才行，不然就用scene.children
          for(let i=0;i<this.modelArr.length;i++){
            if(this.modelArr[i].home=="roof"){
              this.scene.remove(this.modelArr[i])
            }
          }
          this.gotoroof()

          //3D标签
          // this.modelNumber=2;
          // var label=Object.assign({},this.modelArr[1].position)
          // label.y=1
          // this.loadTextPopup('222222', label)
        }

      }

    },

    loadTextPopup: function(text, position){
      // 生成挂牌贴图
      let canvas = this.drawCanvas1(text)

      // 设置纹理
      let texture = new THREE.Texture(canvas)
      // 设置纹理属性，便于展示
      texture.needsUpdate = true
      // 设置材质
      const material = new THREE.SpriteMaterial({ map: texture, color: 0xffffff })
      // 设置材质透明度
      material.opacity = 0.8
      // 设置挂牌
      this.sprite = new THREE.Sprite(material)
      // 设置挂牌位置
      this.sprite.position = position
      // 根据挂牌贴图尺寸比例初始化挂牌尺寸
      this.sprite.scale.set(0.1 / canvas.height * canvas.width, 0.1, 1)
      // 添加挂牌
      this.scene.add(this.sprite)
    },

    // 绘制异形挂牌
    drawCanvas1: function(text){
      let canvas = document.createElement('canvas'), // 画布
      ctx = canvas.getContext('2d'), // 画笔
      fontSize = 40, // 字体大小
      paddingv = 20, // 挂牌上下与文字距离
      paddingh = 30, // 挂牌左右与文字距离
      backgroundColor = 'rgba(70, 160, 255, 1)', // 挂牌背景色
      fontColor = 'white',  // 挂牌文字颜色
      borderWidth = 5  // 挂牌背景描边宽度

      ctx.font = fontSize + "px Arial"
      // 测量文字在画布中的长度，用于计算画布尺寸
      let textWidth = Math.ceil(ctx.measureText(text).width),
      canvasWidth = textWidth + 2*paddingh,
      canvasHeight = fontSize + 2*paddingv

      // 设置画布尺寸
      canvas.width = canvasWidth
      canvas.height = canvasHeight

      // 绘制一个形状
      let radius = 5 || Math.min(paddingv, paddingh)
      ctx.beginPath()
      ctx.lineWidth = borderWidth
      ctx.strokeStyle = 'blue'
      ctx.moveTo(paddingh + borderWidth, borderWidth)
      ctx.lineTo(canvasWidth - borderWidth - radius, borderWidth)
      // 右上拐角圆弧
      ctx.arcTo(canvasWidth - borderWidth, borderWidth, canvasWidth - borderWidth, borderWidth + radius, radius)
      ctx.lineTo(canvasWidth - borderWidth, canvasHeight - borderWidth - radius)
      // 右下拐角圆弧
      ctx.arcTo(canvasWidth - borderWidth, canvasHeight - borderWidth, canvasWidth - borderWidth - radius, canvasHeight - borderWidth, radius)
      ctx.lineTo(borderWidth + radius, canvasHeight - borderWidth)
      // 左下拐角圆弧
      ctx.arcTo(borderWidth, canvasHeight - borderWidth, borderWidth, canvasHeight - borderWidth - radius, radius)
      ctx.lineTo(borderWidth, paddingv + borderWidth)
      ctx.closePath()
      ctx.stroke()
      ctx.clip()

      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = fontColor
      ctx.font = fontSize + "px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(text, canvas.width / 2, canvas.height / 2)

      return canvas
    },

    //高亮
    outlineObj (selectedObjects) {
      // 创建一个EffectComposer（效果组合器）对象，然后在该对象上添加后期处理通道。
      this.composer = new EffectComposer(this.renderer)
      // 新建一个场景通道  为了覆盖到原理来的场景上
      this.renderPass = new RenderPass(this.scene, this.camera)
      this.composer.addPass(this.renderPass);
      // 物体边缘发光通道
      this.outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), this.scene, this.camera, selectedObjects)
      this.outlinePass.selectedObjects = selectedObjects
      this.outlinePass.edgeStrength = 10.0 // 边框的亮度
      // this.outlinePass.edgeGlow = 1// 光晕[0,1]
      this.outlinePass.usePatternTexture = false // 是否使用父级的材质
      // this.outlinePass.edgeThickness = 10.0 // 边框宽度
      this.outlinePass.downSampleRatio = 1 // 边框弯曲度
      this.outlinePass.pulsePeriod = 5 // 呼吸闪烁的速度
      this.outlinePass.visibleEdgeColor.set(parseInt(0xffffff)) // 呼吸显示的颜色
      this.outlinePass.hiddenEdgeColor = new THREE.Color(0, 0, 0) // 呼吸消失的颜色
      this.outlinePass.clear = true
      this.composer.addPass(this.outlinePass)
      // 自定义的着色器通道 作为参数
      // let effectFXAA = new ShaderPass(FXAAShader)
      // const pixelRatio = this.renderer.getPixelRatio();
      // effectFXAA.material.uniforms["resolution"].value.x =1 / (this.width * pixelRatio);
      // effectFXAA.material.uniforms["resolution"].value.y =1 / (this.height * pixelRatio);
      // effectFXAA.renderToScreen = true
      // this.composer.addPass(effectFXAA)
    },
    Update(){
      requestAnimationFrame(this.Update);
      if(texture){
        texture.offset.x -= 0.022; // 每次让贴图的x偏移量减少0.022，以产生动画效果
      }
      this.renderer.render(this.scene,this.camera);
      this.controls.update();
      if(this.composer){
        this.composer.render()
      }
      TWEEN.update();

    },

    modelHide(){
      
      this.modelArr[1].visible=false
    },

    modelShow(){
      this.modelArr[1].visible=true
    },

    sceneAdd(){
      for(var i=0;i<this.modelArr.length;i++){
        this.scene.add(this.modelArr[i])
      }
    },

    sceneRemove(){
      for(var i=0;i<this.modelArr.length;i++){
        this.scene.remove(this.modelArr[i])
      }
    },

    Virtualization(){
      opacityFlag=!opacityFlag
      if(opacityFlag==true){
        for(var i=0;i<this.modelArr.length;i++){
          this.modelArr[i].traverse(function (child) {
            if (child.isMesh) {
              //设置mesh的一些属性
              child.material.transparent=true
              child.material.opacity=0.5
              // child.material.emissive.setHex(0x00ffff)//自发光
            }
          }); 
        }
      }else{
        for(var i=0;i<this.modelArr.length;i++){
          this.modelArr[i].traverse(function (child) {
            if (child.isMesh) {
              //设置mesh的一些属性
              child.material.transparent=true
              child.material.opacity=1
              // child.material.emissive.setHex(0x00ffff)//自发光
            }
          }); 
        }
      }
    },
    
    highLight(){
      highlightFlag=!highlightFlag;
      if(highlightFlag==true){
        this.outlineObj (this.modelArr)
      }else{
        this.outlineObj (null)
      }
    },

    modelHigh(){
      for(var i=0;i<this.modelArr.length-1;i++){
          this.modelArr[i].traverse(function (child) {
            if (child.isMesh) {
              //设置mesh的一些属性
              child.material.transparent=true
              child.material.opacity=0.5
              // child.material.emissive.setHex(0x00ffff)//自发光
            }
          }); 
        }
    },
    animateCameraRoof(current1, target1, current2, target2){
      // current1 相机当前的位置
      // target1 相机的目标位置
      // current2 当前的controls的target
      // target2 新的controls的target
      var obj = {
        x1: current1.x, // 相机当前位置x
        y1: current1.y, // 相机当前位置y
        z1: current1.z, // 相机当前位置z
        x2: current2.x, // 控制当前的中心点x
        y2: current2.y, // 控制当前的中心点y
        z2: current2.z  // 控制当前的中心点z
    }
    var tween = new TWEEN.Tween(obj);
    tween.to({
        x1: 20, // 新的相机位置x
        y1: 45, // 新的相机位置y
        z1: 40, // 新的相机位置z
        x2: 10, // 新的控制中心点位置x
        y2: 0, // 新的控制中心点位置x
        z2: 5  // 新的控制中心点位置x
    },1000);
    let that=this;
    tween.onUpdate(function(){
        that.camera.position.x = obj.x1;
        that.camera.position.y = obj.y1;
        that.camera.position.z = obj.z1;
        that.controls.target.x = obj.x2;
        that.controls.target.y = obj.y2;
        that.controls.target.z = obj.z2;
        that.controls.update();
    })
    tween.onComplete(function(){
        that.controls.enabled = true;
    })
    tween.easing(TWEEN.Easing.Linear.None);
    tween.start();
    },
    gotoroof(){
      for(let i=0;i<this.modelArr.length;i++){
        if(this.modelArr[i].home=="lou"){
          this.animateCameraRoof(this.camera.position,this.modelArr[i].position,this.controls.target,this.modelArr[i].position)
        }
      }
    },
    //看右边机柜
    animateCameraRight(current1, target1, current2, target2){
      // current1 相机当前的位置
      // target1 相机的目标位置
      // current2 当前的controls的target
      // target2 新的controls的target
      var obj = {
        x1: current1.x, // 相机当前位置x
        y1: current1.y, // 相机当前位置y
        z1: current1.z, // 相机当前位置z
        x2: current2.x, // 控制当前的中心点x
        y2: current2.y, // 控制当前的中心点y
        z2: current2.z  // 控制当前的中心点z
    }
    var tween = new TWEEN.Tween(obj);
    tween.to({
        x1: target1.x-5, // 新的相机位置x
        y1: target1.y+1, // 新的相机位置y
        z1: target1.z+2, // 新的相机位置z
        x2: target2.x, // 新的控制中心点位置x
        y2: target2.y+1, // 新的控制中心点位置x
        z2: target2.z+2  // 新的控制中心点位置x
    },1000);
    let that=this;
    tween.onUpdate(function(){
        that.camera.position.x = obj.x1;
        that.camera.position.y = obj.y1;
        that.camera.position.z = obj.z1;
        that.controls.target.x = obj.x2;
        that.controls.target.y = obj.y2;
        that.controls.target.z = obj.z2;
        that.controls.update();
    })
    tween.onComplete(function(){
        that.controls.enabled = true;
    })
    tween.easing(TWEEN.Easing.Linear.None);
    tween.start();
    },
    gotoRight(a,b,c,d){
      this.animateCameraRight(a,b,c,d)
    },
    animateCameraLeft(current1, target1, current2, target2){
      // current1 相机当前的位置
      // target1 相机的目标位置
      // current2 当前的controls的target
      // target2 新的controls的target
      var obj = {
        x1: current1.x, // 相机当前位置x
        y1: current1.y, // 相机当前位置y
        z1: current1.z, // 相机当前位置z
        x2: current2.x, // 控制当前的中心点x
        y2: current2.y, // 控制当前的中心点y
        z2: current2.z  // 控制当前的中心点z
    }
    var tween = new TWEEN.Tween(obj);
    tween.to({
        x1: target1.x+5, // 新的相机位置x
        y1: target1.y+1, // 新的相机位置y
        z1: target1.z+2, // 新的相机位置z
        x2: target2.x, // 新的控制中心点位置x
        y2: target2.y+1, // 新的控制中心点位置x
        z2: target2.z+2  // 新的控制中心点位置x
    },1000);
    let that=this;
    tween.onUpdate(function(){
        that.camera.position.x = obj.x1;
        that.camera.position.y = obj.y1;
        that.camera.position.z = obj.z1;
        that.controls.target.x = obj.x2;
        that.controls.target.y = obj.y2;
        that.controls.target.z = obj.z2;
        that.controls.update();
    })
    tween.onComplete(function(){
        that.controls.enabled = true;
    })
    tween.easing(TWEEN.Easing.Linear.None);
    tween.start();
    },
    gotoLeft(a,b,c,d){
      this.animateCameraLeft(a,b,c,d)
    },

    modelAdd(){
      // console.log(this.modelArr[0])
      // var modelcopy=Object.assign({},this.modelArr[0])//js深拷贝很方便！
      var modelcopy=this.modelArr[0].clone()
      this.modelArr.push(modelcopy)
      this.scene.add(this.modelArr[3])
      this.modelArr[3].position.set(0,1,1)

    },

    modelRemove(){
      this.scene.remove(this.modelArr[0])
      this.modelArr.splice(0,1)
    },

    animateCube(capacity,x,y,z){
      var geometry=new THREE.BoxGeometry(1,1,1);
      var material=new THREE.MeshPhysicalMaterial({ 
        color:0xff0000,
        metalness: 1.0,
        roughness: 0.6,
        clearcoat: 1.0,
				clearcoatRoughness: 1.0,
				reflectivity: 1.0,
        } );
      var cube=new THREE.Mesh(geometry,material);
      cube.scale.set(0.5, 0, 0.5);
      cube.position.set(x,y,z);
      cube.castShadow = true;
      // cube.receiveShadow = true;
      this.scene.add(cube);

      TweenLite.to(cube.scale, 2, {y: capacity,ease:'bounce.out'});
      TweenLite.to(cube.position, 2, {y: capacity/2+y,ease:'bounce.out'});
    
    },

    capacityDisplay(){
      for(var i=0;i<this.modelArr.length;i++){
        this.animateCube(1,gltfjson[i].position[0],gltfjson[i].position[1],gltfjson[i].position[2])
      }
    },

    createPath(pointsArr) {
      pointsArr = pointsArr.map((point) => new THREE.Vector3(...point)); // 将参数数组转换成点数组的形式

      // 方法一：自定义三维路径 curvePath,不平滑
      // const path = new THREE.CurvePath();
      // for (let i = 0; i < pointsArr.length - 1; i++) {
      //   const lineCurve = new THREE.LineCurve3(pointsArr[i], pointsArr[i + 1]); // 每两个点之间形成一条三维直线
      //   path.curves.push(lineCurve); // curvePath有一个curves属性，里面存放组成该三维路径的各个子路径
      // }
      // 方法二：利用CatmullRomCurve3创建三维路径，不过CatmullRomCurve3是平滑的三维样条曲线
      const path = new THREE.CatmullRomCurve3(pointsArr);

      return path;
    },

    createTube(...pointsArr){
      const path = this.createPath(pointsArr); // createPath是我们编写的创建路径的函数，详细如下
      const geometry = new THREE.TubeGeometry(path, 64, 0.05); // 第一个参数为路径，必须为Curve类，第二个参数为分段值（可理解为细粒度），第三个参数为管道横截面半径
      // curve是基类，表示曲线，子类有lineCurve二维直线，lineCurve3三维直线
      // curvePath是一组curve构成的路径，可以算是curve的子类，curvePath的子类path二维路径，shape是path的子类，所以第一个参数可以传入curvePath
      // 模拟管线运动动画的贴图texture
      texture = new THREE.TextureLoader().load('./static/tube.jpg');
      texture.wrapS = THREE.RepeatWrapping; // 设置x方向能够重复，这样才可以设置texture的偏移量offset
      texture.repeat.x = 1; // 设置x方向的重复数为1，也可设置为2，这样产生的动画效果代表管道内同时有两端数据元在传输
          
      const material = new THREE.MeshBasicMaterial({ 
        map:texture,
        transparent:true 
      });
      const mesh = new THREE.Mesh(geometry, material);
      return mesh;
    },

    linePipe(){
      const mesh  =this.createTube([0,0.5,3], [0,0.7,1], [0,0.5,-2]);
      this.scene.add(mesh)
    },

    handleNodeClick(data) {
        if(data.label=="一级"){
          var label=Object.assign({},this.modelArr[0].position)
          label.y=1
          this.loadTextPopup('000000', label)
        }else if(data.label=="二级"){
          var label=Object.assign({},this.modelArr[1].position)
          label.y=1
          this.loadTextPopup('111111', label)
        }else{
          var label=Object.assign({},this.modelArr[2].position)
          label.y=1
          this.loadTextPopup('222222', label)
        };
    },
    find(){
      //遍历
      for(let i=0;i<this.modelArr.length;i++){
        if(i=2){
          this.modelArr[i].position.set(0,0,0)
        }
        // console.log(this.modelArr)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    width:600px;
    height:400px;
  }
  .title {
    color:#C1FAE8;
    font-size:1.2vw;
    margin-left: 1vw;
    margin-bottom:0;
    margin-top:1vw;
  }
  .time {
    color:#ffffff;
    font-size:1vw;
    margin-left: 1vw;
    margin-bottom:0;
    margin-top:1.2vw;
  }
  .sidebar {
    color:#ffffff;
    font-size:0.8vw;
    margin-left: 1vw;
  }
  .dataV-percent {
    width:100%;
    height:1vw
  }
  .subtitle {
    color: #7AC1AB;
    font-size:1.05vw;
    background-color: #1A2524;
  }
  .subtitle p{
    margin: 0 0;
    padding: 0.3vw 0 0.3vw 1vw;
  }
  .subtitle2 {
    color: #568C7B;
    font-size:1.05vw;
    background-color: #1A2524;
  }
  .subtitle2 p{
    text-align: center;
    margin: 0 0;
    padding: 1vw 0;
    margin:1vw 0;
  }
  .sstitle {
    color: #ffffff;
    font-size:0.95vw;
    border-bottom: 0.2vw dotted #1C2E2A;
  }
  .sstitle p{
    margin: 0 0;
    padding: 0.3vw 0 0.1vw 0vw;
  }
  .sstitle .p1{
    text-align: left;
    display:inline-block;
    color: #818484;
  }
  .sstitle .p2{
    float: right;
    display:inline-block;
    color: #7AC1AB;
  }
  .ssscontentAll{
    border-bottom: 0.25vw solid #333B3B;
    padding-bottom: 0.3vw;
  }
  .ssscontentLeft {
    width: 49%;
    display: inline-block;
    text-align: left;  
  }
  .ssscontentRight {
    width: 49%;
    display: inline-block;
    float: right;
  }
  .ssstitle p{
    margin: 0 0;
    padding: 0.3vw 0 0.3vw 0vw;
  }
  .ssstitle .pp1{
    text-align: left;
    display:inline-block;
    color: #818484;
  }
  .ssstitle .pp2{
    float: right;
    display:inline-block;
    color: #F0D61B;
  }
</style>

<style>
.menu1 .el-menu.el-menu--horizontal {
    border-bottom:0px;
}
.menu1 .el-menu-item {
    font-size: 1vw;
    padding: 0 1vw;
    height: 2.5vw;
    line-height: 2.5vw;
    font-weight: bold;
}
.menu1 .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 0.25vw solid rgb(167, 199, 189);
}


.menu2 .el-menu.el-menu--horizontal {
    border-bottom: solid 0px #e6e6e6;
}
.menu2 .el-menu-item {
    font-size: 1vw;
    padding: 0.5vw 0.5vw;
    height: 2.4vw;
    line-height: 2.4vw;
    border-bottom: 0px;
}
.menu2 .el-menu-item i{
    color: rgb(89, 109, 104);
}
.menu2 .el-menu-item.is-active i{
    color: rgb(167, 199, 189);
}
.menu2 .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 0px;
}


.el-scrollbar__wrap {
  overflow-x: hidden;
}

.dv-percent-pond text {
    display:none;
}

.el-input__inner {
  background-color: #ADCFC5;
  border: 1px solid #071010;
  height: 35px;
  line-height: 35px;
  color:#ffffff;/*没有用不知道咋回事 */
}
.el-input__suffix {
  color:#ffffff;
}
.el-input--suffix {
  color:#ffffff;
}
</style>