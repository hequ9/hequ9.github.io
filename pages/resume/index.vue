<script lang="ts" setup>
import MainPanel from './__components__/MainPanel.vue'
</script>

<template>
  <div id="resume">
    <div class="card">
      <h2 text-10>
        何松柳
      </h2>
      <span>1997.07.10</span>
      <span>前端工程师</span>
      <div
        class="avatar"
        my-12
        self-start
        overflow-hidden
        rounded-full
        text-0
        shadow-2xl
      >
        <img
          src="https://avatars.githubusercontent.com/u/49673052?v=4"
          h-auto
          w-35
        />
      </div>
      <div class="info">
        <div>
          <i material-symbols:alternate-email />
          <span>hequ9@outlook.com</span>
        </div>
        <div>
          <i material-symbols:phone-in-talk />
          <span>13009761515</span>
        </div>
        <div>
          <i ic:baseline-wechat />
          <span>hequ97</span>
        </div>
        <div>
          <i material-symbols:add-location />
          <span>黑龙江省 哈尔滨市</span>
        </div>
        <div>
          <i material-symbols:globe-asia />
          <a
            text-white
            href="/"
          >https://hequ9.me</a>
        </div>
      </div>
      <div class="stack">
        <div>
          <i vscode-icons:file-type-html />
          <i devicon:css3 />
          <i vscode-icons:file-type-js-official />
          <i vscode-icons:file-type-typescript-official />
        </div>
        <div>
          <i skill-icons:electron />
          <i skill-icons:vuejs-light />
          <i skill-icons:pinia-light />
          <i skill-icons:vite-light />
        </div>
        <div>
          <i skill-icons:tailwindcss-dark />
          <i vscode-icons:file-type-unocss />
          <i logos:element />
          <i skill-icons:vuetify-light />
        </div>
      </div>
    </div>
    <main>
      <MainPanel>
        <template #title>
          个人介绍
        </template>
        <p>
          一个前端，2014年7月从业至今，拥有扎实的技术基础和丰富的项目经验，热衷构建高效、美观且交互友好的网页&应用，为用户提供流畅的交互体验。
        </p>
      </MainPanel>
      <MainPanel>
        <template #title>
          技术栈
        </template>
        <ol
          type="1"
          space-y-2
        >
          <li>
            <b>核心技能：</b>HTML、CSS、JavaScript、TypeScript
          </li>
          <li>
            <b>前端框架：</b>Vue(3.0+)、Nuxt(3.0+)
          </li>
          <li>
            <b>UI库：</b>Element、Vant、Vuetify
          </li>
          <li>
            <b>构建工具：</b>Vite
          </li>
          <li>
            <b>版本控制：</b>Svn、Git
          </li>
          <li>
            <b>其他：</b>Electron、NodeJs、Uni-app、小程序
          </li>
          <li>
            <b>有所涉猎的：</b>NestJs、MongoDB
          </li>
        </ol>
      </MainPanel>
      <MainPanel class="step">
        <template #title>
          任职经历
        </template>
        <h4>
          <a
            href="https://www.wykj365.com/"
            target="_blank"
          >佳木斯网云信息科技有限公司</a>（2014.7—2021.5）【美工&前端工程师】
        </h4>
        <dl>
          <dt>任职期：</dt>
          <dd>为中小型企事业单位制作PC&移动网站、小程序、电商平台，在职期间开发网站项目300+、电商平台5+、小程序50+</dd>
          <dt>案例：（由于年代久远，多数代表性案例已无迹可查or停运）</dt>
          <dd>
            <ol type="1">
              <li>
                <a
                  href="https://www.wykj365.com/"
                  target="_blank"
                >网云信息科技</a>
              </li>
            </ol>
          </dd>
        </dl>
        <hr />
        <h4>
          <a
            href="https://www.zeroad-cn.com/"
            target="_blank"
          >重庆至道科技股份有限公司</a>（2021.6—2022.1）【前端工程师】
        </h4>
        <dl>
          <dt>任职期：</dt>
          <dd>担任前端工程师、公司以医患体验相关服务的B端应用为主、在职期间开发了“医满意”小程序</dd>
          <dt>案例：</dt>
          <dd>
            <ol type="1">
              <li>
                <strong>医满意（小程序）</strong>
                <p>医满意是一个专业的医疗满意度评估平台，提供全方位的满意度调查和分析服务。 通过科学的评估体系和先进的数据分析技术，帮助医疗机构全面了解患者和员工的需求与反馈， 为医疗服务质量提升提供有力支持。</p>
              </li>
            </ol>
          </dd>
        </dl>
        <hr />
        <h4>
          哈尔滨千威科技有限公司（2022.6—2025.2）【前端工程师】
        </h4>
        <dl>
          <dt>任职期：</dt>
          <dd>担任前端工程师、工作内容为中国电信业务的维护&开发，中小型企业网站、管理系统、小程序开发。</dd>
          <dt>案例：</dt>
          <dd>
            <ol type="1">
              <li>
                <strong>电子签章系统（客户端+管理端） + 能力平台（可视化）</strong>
                <p>
                  全流程线上签约服务，无缝衔接内部业务系统，打造用户注册、企业授权、印章证书管理、签署授权、云签约、文档下载回传等一站式签约管理新模式。<br />提供便携、安全、合规的签约方式，用户、企业绑定联动，增设一事一授权的安全业务机制降低操作风险，支持多供应商流转签约场景，适配多种业务签约需求。<br />
                  电子合同管理体系由合同管理系统、供应商签约门户两部分组成。实现合同内部审批、外部签署全过程的一体化管理。
                </p>
                <hr />
                <p>
                  栈：Vue + Vite + Vuetify + Pinia + VueRouter + Unocss
                </p>
              </li>
            </ol>
          </dd>
        </dl>
      </MainPanel>
    </main>
  </div>
</template>

<style lang="scss" scoped>
#resume {
  @apply w-full max-w-1200px p2 bg-white mx-auto my-4 rounded-2 flex-(~);
  main {
    @apply p8 flex-(~ col start 1);
  }
  .card {
    @apply flex-(~ col start) bg-#1B3142 p-12 text-white;
    .info {
      @apply flex-(~ col) text-3.5 space-y-2;
      div {
        @apply flex-(~ items-center);
      }
      i {
        @apply mr-2 size-4;
      }
    }
    .stack {
      @apply flex-(~ col) space-y-4 mt-20;
      div {
        @apply flex-(~ nowrap) space-x-4;
      }
      i {
        @apply size-6;
      }
    }
  }
  .step {
    h4 {
      @apply m-0;
    }
    a {
      @apply text-blue decoration-none;
    }
    dt {
      @apply font-bold;
    }
    ol {
      @apply p-0;
    }
    dd {
      @apply m-inline-8 my-3 text-3.5;
      p {
        @apply leading-[2];
      }
    }
  }
}
</style>
