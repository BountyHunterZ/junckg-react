import React from 'react';
import './App.css';

const App: React.FC = () => {
  const hero = document.getElementById("hero");
  hero!.className = "hero is-primary is-medium has-carousel"
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
            <p className="title">天元管道产品</p>
          </article>
          <article className="tile is-child notification is-info">
            <p className="title">万丰塑胶产品</p>
          </article>
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
