"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[889],{1889:(t,s,a)=>{a.r(s),a.d(s,{default:()=>r});var e=a(629);const i={name:"index",mounted:function(){this.loadAnimesList(1,12)},data:function(){return{loading:!0,activity:[{title:"Написали комментарии",text:"Re:Zero. Жизнь с нуля в альтернативном мире",users:[{id:1,name:"Admin",avatar_ul:"/assets/images/avatars/default.png"},{id:2,name:"Test",avatar_ul:"/assets/images/avatars/default.png"}]},{title:"Посмотрели аниме",text:"ToraDora!",users:[{id:1,name:"Admin",avatar_ul:"/assets/images/avatars/default.png"}]}]}},watch:{animeList:{handler:function(t){t&&(this.loading=!1)}}},methods:(0,e.nv)(["loadAnimesList"]),computed:(0,e.Se)(["animeList"])};const r=(0,a(1900).Z)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 col-md-4 order-2 order-md-1"},[a("h6",{staticClass:"p-title mb-4"},[t._v(t._s(t.$t("recent actions")))]),t._v(" "),a("div",{staticClass:"col-12"},[t._l(t.activity,(function(t){return a("card-item",{key:t.id,attrs:{title:t.title,text:t.text,users:t.users}})})),t._v(" "),t._m(0)],2)]),t._v(" "),a("div",{staticClass:"col order-1"},[a("div",{staticClass:"row mb-2 mt-sm-4 mt-md-0"},[a("div",{staticClass:"col-auto me-auto"},[a("h6",{staticClass:"p-title"},[t._v(t._s(t.$t("anime")+" "+t.$t("with high rating")))])]),t._v(" "),a("div",{staticClass:"col-auto"},[a("router-link",{staticClass:"btn",attrs:{to:"/animes?=что-то_там",type:"button"}},[t._v(t._s(t.$t("view more")))])],1)]),t._v(" "),a("div",{staticClass:"entry-list ps-4 pe-4 pb-2"},[t.loading?a("loading"):a("div",{staticClass:"row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3 mt-0"},t._l(t.animeList,(function(t){return a("catalog-entry",{key:t.id,attrs:{id:t.id,name:t.name_ru,type:t.type,genres:t.genres,poster_url:t.poster.preview,status:t.status,studios:t.studios,route:{name:"anime",params:{id:t.id}}}})})),1)],1),t._v(" "),t._m(1),t._v(" "),t._m(2)])])}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card "},[a("a",{attrs:{href:"#"}},[t._v("Вся активность")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row mb-2 mt-4"},[a("div",{staticClass:"col-auto me-auto"},[a("h6",{staticClass:"p-title"},[t._v(" Манга с самыми высокими оценками")])]),t._v(" "),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn",attrs:{type:"button"}},[t._v("Подробнее")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"entry-list mb-2",staticStyle:{height:"494px"}},[a("p",{staticClass:"text-center"},[t._v("РАЗДЕЛ НАХОДИТСЯ В РАЗРАБОТКЕ")])])}],!1,null,"d77918f6",null).exports}}]);