import React from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps, match, Link, Switch } from "react-router-dom";
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route component={Index} path="/" exact />
        <Route component={Index} path="/index" exact />
        <Route component={Index} path="/index.html" exact />
        <Route component={Index} path="/index.htm" exact />
        <Route component={Tianyuan} path="/tianyuan" exact />
        <Route component={Tianyuan} path="/tianyuan" />
        <Route component={Wanfeng} path="/wanfeng" exact />
        </Switch>
    </Router>
  );
}

function clearIndexStyle() {
  const hero = document.getElementById("hero");
  hero!.className = "hero is-primary"
  document.getElementById("main-carousel")!.style.display = "none"
  document.getElementById("mainSubitle")!.innerHTML = "重庆盟世欣商贸有限公司"
}

const Wanfeng: React.FC = () => {
  clearIndexStyle()
  document.getElementById("mainTitle")!.innerHTML = "万丰塑胶"
  return(
    <div style={{padding: "16px"}}>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <div className="tile is-child" style={{backgroundImage: "url(/wf/pvc.jpg)", backgroundSize: "cover"}}></div>
        </div>
        <div className="tile is-parent is-3">
          <article className="tile is-child notification">
            <p className="subtitle">PVC难燃冷弯管材管件</p>
          </article>
        </div>
        <div className="tile is-parent is-7">
          <article className="tile is-child notification">
            <p>
            重庆万丰塑胶有限公司生产的PVC-U阻燃穿线管材具有良好的绝缘、阻燃性能，产品规格齐全，分A型、B型、C型、D标型等四种类型，并且管件配套齐全，主要用作电气、通讯线缆套管。
            </p>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <div className="tile is-child" style={{backgroundImage: "url(/wf/hdpe.jpg)", backgroundSize: "cover"}}></div>
        </div>
        <div className="tile is-parent is-3">
          <article className="tile is-child notification">
            <p className="subtitle">HDPE双壁波纹管</p>
          </article>
        </div>
        <div className="tile is-parent is-7">
          <article className="tile is-child notification">
            <p>
            HDPE双壁波纹管除了具有普通塑料管所具有的耐腐蚀性好、绝缘性高、内壁光滑、流动阻力小等提点以外，还因采用了特殊的中空环形结构，具有优异的环刚度和良好的强度与韧性，及重量轻、耐冲击性强，不易破损等特点。目前在发达国家的诸多领域已经广泛应用，尤其是在美国、加拿大、日本以及欧洲许多国家、双壁波纹管广泛应用于市政排水排污、农业灌溉、煤矿通风、化工、通信电缆护套等领域。实践已证明，在满足工程应用的强度和刚度要求下，采用双壁波纹管结构可节约材料30%～50%，此外，对比混凝土管、铸铁管，有运输安装方便，降低施工人员劳动强度及降低工程的总投资等优势，是混凝土管、铸铁管的理想换代产品。 
            </p>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <div className="tile is-child" style={{backgroundImage: "url(/wf/upvc.jpg)", backgroundSize: "cover"}}></div>
        </div>
        <div className="tile is-parent is-3">
          <article className="tile is-child notification">
            <p className="subtitle">UPVC排水管</p>
          </article>
        </div>
        <div className="tile is-parent is-7">
          <article className="tile is-child notification">
            <p>
            PVC-U排水管是技术成熟的排水管系列产品，在国内外已获得广泛应用。产品有铸铁管无以比拟的长久寿命，耐腐蚀等优点；在施工上更有重量轻便于搬运安装以及连接简易等特点、广泛应用于民用建筑排水排污，化工排水排污，排雨水等领域。PVC-U排水管管材、管件符合GB/T5836.1-2006和GB/T5836.2-2006的标准要求。产品有直管、扩直口管和扩凸口管三种形式，可使用多种管道连接方式。此外，公司还开发了用于排雨水的压力排水管和美观的方形雨落水管用于不同建筑的排雨水设计及工程；开发了可降低排水噪音的螺旋消音管、中空螺旋消音管以及中空壁消音管系列排水管。本公司生产的管材规格齐全，管件配套完备，可以满足各种设计要求。 
            </p>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <div className="tile is-child" style={{backgroundImage: "url(/wf/pvcu.jpg)", backgroundSize: "cover"}}></div>
        </div>
        <div className="tile is-parent is-3">
          <article className="tile is-child notification">
            <p className="subtitle">PVC-U蓝白给水管材管件</p>
          </article>
        </div>
        <div className="tile is-parent is-7">
          <article className="tile is-child notification">
            <p>
            硬聚氯乙烯(PVC-U)给水管道作为一种发展成熟的供水管材，具有耐酸、耐碱、耐腐蚀性强，耐压性能好，强度高，质轻，价格低，流体阻力小，无二次污染，符合卫生要求，施工操作方便等优越性能。大力推广PVC-U给水管，符合国家建设部、国家经贸委发展化学建材的指导方针，符合人们生活水平提高的发展需要。 PVC-U环保给水管系统在欧美等国家已经使用了几十年，已成为最普遍、最广泛应用的供水系统。万丰PVC-U环保给水管管材、管件系列产品是国家标准GB/T 10002.1-2006及GB/T 10002.2-2003标准进行生产的。产品符合GB/T17219-1998标准要求及国家卫生部相关的卫生安全评价规定。重庆万丰塑胶有限公司顺应国家的快速发展化学建材以及广大用户生活水平提高的需要，本着水是健康之本的理念，所生产的万丰PVC-U环保给水管可取代传统的供水管，能杜绝二次污染，使人们能饮用上洁净、健康的水。万丰PVC-U环保给水管经过严格的测试表明，产品符合各项卫生标准的要求，是真正健康、环保的新型产品。</p>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <div className="tile is-child" style={{backgroundImage: "url(/wf/jcj.jpg)", backgroundSize: "cover"}}></div>
        </div>
        <div className="tile is-parent is-3">
          <article className="tile is-child notification">
            <p className="subtitle">PE塑料检查井</p>
          </article>
        </div>
        <div className="tile is-parent is-7">
          <article className="tile is-child notification">
            <p>
            井筒直径450,可连接200、250、315、300、400波纹管、缠绕管、玻璃钢管各种相应材料的管道，连接形式有正三通、异三通。材料：PE 产品标准：CJ/T233-2006
            </p>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <div className="tile is-child" style={{backgroundImage: "url(/wf/perq.jpg)", backgroundSize: "cover"}}></div>
        </div>
        <div className="tile is-parent is-3">
          <article className="tile is-child notification">
            <p className="subtitle">PE燃气管</p>
          </article>
        </div>
        <div className="tile is-parent is-7">
          <article className="tile is-child notification">
            <p>
            燃气用PE管材是传统的钢铁管材、聚氯文字乙烯燃气的换代产品。燃气管必须承受一定的压力，通常要选用分子量大、机械性能较好的PE树脂，如HDPE树脂。LDPE树脂的拉伸强度低，耐压差，刚性差，成型加工时尺寸稳定性差，并且连接困难，不适宜作为给水压力管的材料。但由于其卫生指标较高，LDPE特别是LLDPE树脂已成为燃气管的常用材料。LDPE、LLDPE 树脂的熔融粘度小，流动性好，易加工，因而对其熔体指数的选择范围也较宽，通常MI在0.3-3g/10min之间。 </p>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <div className="tile is-child" style={{backgroundImage: "url(/wf/pejs.jpg)", backgroundSize: "cover"}}></div>
        </div>
        <div className="tile is-parent is-3">
          <article className="tile is-child notification">
            <p className="subtitle">PE给水管材管件</p>
          </article>
        </div>
        <div className="tile is-parent is-7">
          <article className="tile is-child notification">
            <p>
            PE环保健康给水管材及管件采用进口PE100或PE80为原材料生产，规格、尺寸及性能符合GB/T13663-2000，GB/T13663.2-2005标准的要求，卫生性能符合GB/T17219标准以及国家卫生部相关的为上安全性评价规定，PE环保健康给水管具有柔韧性好、耐腐蚀性强、质轻、抗冲击性能优良等优点。管材、管件里连接可采用热熔承插、热熔对接及电熔等连接方式，使管材、管件为一体，系统安全可靠，施工成本低，在工程应用中发展迅速。大力推广PE管，符合国家建设部、国家经贸委发展化学建材的指导方针，符合人们生活水平提高的发展需要。 
            </p>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <div className="tile is-child" style={{backgroundImage: "url(/wf/xcg.jpg)", backgroundSize: "cover"}}></div>
        </div>
        <div className="tile is-parent is-3">
          <article className="tile is-child notification">
            <p className="subtitle">PPVC线槽管材、管件 </p>
          </article>
        </div>
        <div className="tile is-parent is-7">
          <article className="tile is-child notification">
            <p>
            PVC线槽作为重庆万丰塑胶有限公司生产的主要产品之一，主要用于室内布线，它美观大方，使用方便，经久耐用，深受广大用户的青睐。
            </p>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <div className="tile is-child" style={{backgroundImage: "url(/wf/xylxg.jpg)", backgroundSize: "cover"}}></div>
        </div>
        <div className="tile is-parent is-3">
          <article className="tile is-child notification">
            <p className="subtitle">PVC实壁、中空螺旋消音螺旋管材</p>
          </article>
        </div>
        <div className="tile is-parent is-7">
          <article className="tile is-child notification">
            <p>
            中空螺旋消音管，在具备PVC-U实壁管的所有优点性能外，尤其是隔音效果明显，它比标准实壁管能降低8-10分贝，确实遏制了在污水排放过程中所产生的噪音，从而使您的居住环境更加温馨、安静。 
            </p>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <div className="tile is-child" style={{backgroundImage: "url(/wf/pvcdl.jpg)", backgroundSize: "cover"}}></div>
        </div>
        <div className="tile is-parent is-3">
          <article className="tile is-child notification">
            <p className="subtitle">pvc电力管</p>
          </article>
        </div>
        <div className="tile is-parent is-7">
          <article className="tile is-child notification">
            <p>
            压电力电缆在正常工作产生的缆芯温度随典雅的高低而不同。如输送110KVA电压的电缆缆芯温度传至套管时，正常情况下为65℃左右，过载情况下可达75℃，PVC-C材料具有高达93℃的热变形温度，可适应高温的环境。 
            </p>
          </article>
        </div>
      </div>

    </div>
  )
}

const Tianyuan: React.FC = () => {

  clearIndexStyle()
  document.getElementById("mainTitle")!.innerHTML = "天原管道"

  
  return (
    <div style={{padding: "16px", backgroundColor: "#f8f8f8"}}>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <article className="tile is-child notification" style={{backgroundColor: "#e8e8e8"}}>
            <p className="title">市政管道</p>
          </article>
        </div>
        <div className="tile is-parent is-10 is-vertical">
          <a href="/tianyuan/pvco">
            <article className="tile is-child notification" style={{backgroundColor: "#f8f8f8"}}>
              <img src="/ty/pvco.jpg" />
            </article>
          </a>

          <a href="/tianyuan/pvcu">
            <article className="tile is-child notification" style={{backgroundColor: "#f8f8f8"}}>
              <img src="/ty/pvcu.jpg" />
            </article>
          </a>

          <a href="/tianyuan/pe">
            <article className="tile is-child notification" style={{backgroundColor: "#f8f8f8"}}>
              <img src="/ty/pe.jpg" />
            </article>
          </a>

          <a href="/tianyuan/pvcc">
            <article className="tile is-child notification" style={{backgroundColor: "#f8f8f8"}}>
              <img src="/ty/pvcc.jpg" />
            </article>
          </a>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <article className="tile is-child notification" style={{backgroundColor: "#e8e8e8"}}>
            <p className="title">民建管道</p>
          </article>
        </div>

        <div className="tile is-parent is-10 is-vertical">
          <a href="/tianyuan/pvcus">
            <article className="tile is-child notification" style={{backgroundColor: "#f8f8f8"}}>
              <img src="/ty/pvcus.jpg" />
            </article>
          </a>

          <a href="/tianyuan/ppr">
            <article className="tile is-child notification" style={{backgroundColor: "#f8f8f8"}}>
              <img src="/ty/ppr.jpg" />
            </article>
          </a>

          <a href="/tianyuan/pvcudl">
            <article className="tile is-child notification" style={{backgroundColor: "#f8f8f8"}}>
              <img src="/ty/pvcudl.jpg" />
            </article>
          </a>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <article className="tile is-child notification" style={{backgroundColor: "#e8e8e8"}}>
            <p className="title">家装管道</p>
          </article>
        </div>
        <div className="tile is-parent is-10 is-vertical">
          <a href="/tianyuan/pvcud">
            <article className="tile is-child notification" style={{backgroundColor: "#f8f8f8"}}>
              <img src="/ty/pvcud.jpg" />
            </article>
          </a>

          <a href="/tianyuan/pprj">
            <article className="tile is-child notification" style={{backgroundColor: "#f8f8f8"}}>
              <img src="/ty/pprj.jpg" />
            </article>
          </a>

          <a href="/tianyuan/pert">
            <article className="tile is-child notification" style={{backgroundColor: "#f8f8f8"}}>
              <img src="/ty/pert.jpg" />
            </article>
          </a>
        </div>
        </div>
    </div>
  )
}

const Index: React.FC = () => {
  const hero = document.getElementById("hero");
  hero!.className = "hero is-primary is-medium has-carousel"
  document.getElementById("main-carousel")!.style.display = "block"
  document.getElementById("mainTitle")!.innerHTML = "盟世欣商贸"
  document.getElementById("mainSubitle")!.innerHTML = "天原管道、万丰塑胶重庆经销商"
  return (
    <div style={{padding: "16px"}}>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-4">
          <article className="tile is-child notification is-primary">
            <p className="title">公司简介</p>
            <p>
            重庆盟世欣商贸有限公司位于美丽的山城重庆，我们主要经销万丰塑胶和天原管道品牌，产品严格按照有关国家标准和行业标准进行生产，主要产品有PVC-O给水管，PPR冷热水管，PVC排水管，PE燃气管，HDPE双壁波纹管等建筑材料。
            <br />
            <br />
            公司以“科技创新、质量创优，服务创先、绩效创佳、与时俱进”为工作指南，奉行“质量第一、服务至上”的服务理念，坚持“诚信、敬业、卓越、奉献”的企业精神，为客户提供最优质、最快捷的咨询与服务。
            </p>
          </article>
        </div>

        <div className="tile is-parent is-vertical is-4">
          
          <article className="tile is-child notification is-info" style={{backgroundImage:"url(tycover.jpg)"}}>
            <a href="/tianyuan" style={{textDecoration: "none"}}> 
              <div style={{height:"100%", width:"100%"}}>
                <p className="title">天原管道产品</p>
              </div>
            </a>
          </article>
          
          <a href="/wanfeng">
            <article className="tile is-child notification is-info">
              <p className="title">万丰塑胶产品</p>
            </article>
          </a>
        </div>

        <div className="tile is-parent is-4">
          <article className="tile is-child notification is-link">
            <p className="title">联系我们</p>
            <p><strong>服务热线</strong></p>
            <p>023-62327258</p>
            <br />
            <p><strong>联系人</strong></p>
            <p>周先生</p>
            <br />
            <p><strong>联系电话</strong></p>
            <p>18580433999</p>
            <br />
            <p><strong>联系地址</strong></p>
            <p>重庆市南岸区南坪西路32号</p>
            <br />
            <p><strong>电子邮件</strong></p>
            <p>1300196030@qq.com</p>
          </article>
        </div>

      </div>
    </div>
  );
}

export default App;
