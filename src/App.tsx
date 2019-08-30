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
        </Switch>
    </Router>
  );
}

function clearIndexStyle() {
  const hero = document.getElementById("hero");
  hero!.className = "hero is-primary"
  document.getElementById("main-carousel")!.style.display = "none"
  document.getElementById("mainTitle")!.innerHTML = "天元管道"
  document.getElementById("mainSubitle")!.innerHTML = "重庆盟世欣商贸有限公司"
}

const Tianyuan: React.FC = () => {

  clearIndexStyle()
  
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
  document.getElementById("mainSubitle")!.innerHTML = "天元管道、万丰塑胶重庆经销商"
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
                <p className="title">天元管道产品</p>
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
