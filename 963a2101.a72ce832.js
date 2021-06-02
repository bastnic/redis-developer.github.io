(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{135:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return r})),s.d(t,"metadata",(function(){return o})),s.d(t,"toc",(function(){return l})),s.d(t,"default",(function(){return u}));var a=s(3),n=s(7),i=(s(0),s(176)),r=(s(181),s(182),s(177),s(178),{id:"index-streams",title:"Using Redis Streams with RedisInsight",sidebar_label:"Using Redis Streams",slug:"/explore/redisinsight/streams"}),o={unversionedId:"explore/redisinsight/streams/index-streams",id:"explore/redisinsight/streams/index-streams",isDocsHomePage:!1,title:"Using Redis Streams with RedisInsight",description:"Redis Streams is a Redis data type that represents a log, so you can add new information and message in an append-only mode",source:"@site/docs/explore/redisinsight/streams/index-streams.mdx",slug:"/explore/redisinsight/streams",permalink:"/explore/redisinsight/streams",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/streams/index-streams.mdx",version:"current",sidebar_label:"Using Redis Streams",sidebar:"docs",previous:{title:"Manage Your Redis Cluster using RedisInsight Cluster Management Tool",permalink:"/explore/redisinsight/cluster"},next:{title:"Analyze Your Redis commands using RedisInsight Profiler tool",permalink:"/explore/redisinsight/profiler"}},l=[{value:"Prerequisite:",id:"prerequisite",children:[]},{value:"Step 1. Cloning the repository",id:"step-1-cloning-the-repository",children:[]},{value:"Step 2. Run the producer(Post a new message)",id:"step-2-run-the-producerpost-a-new-message",children:[]},{value:"Step 3. Run the consumer(Consume messages)",id:"step-3-run-the-consumerconsume-messages",children:[]},{value:"Step 4: Posting the new messages",id:"step-4-posting-the-new-messages",children:[]},{value:"Additional Links",id:"additional-links",children:[]}],c={toc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Redis Streams is a Redis data type that represents a log, so you can add new information and message in an append-only mode\nRedis Streams lets you build \u201cKafka-like\u201d applications, which can:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create applications that publish and consume messages. Nothing extraordinary here, you could already do that with Redis Pub/Sub."),Object(i.b)("li",{parentName:"ul"},"Consume messages that are published even when the client application (consumer) is not running. This is a big difference from Redis Pub/Sub."),Object(i.b)("li",{parentName:"ul"},"Consume messages starting from a specific point. For example, read the whole history or only new messages. ")),Object(i.b)("p",null,"In addition, Redis Streams has the concept of consumer groups. Redis Streams consumer groups, like the similar concept in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://kafka.apache.org/"}),"Apache Kafka"),", allows client applications to consume messages in a distributed fashion (multiple clients), making it easy to scale and create highly available systems."),Object(i.b)("p",null,"Let\u2019s dive under the covers and see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redis.io/topics/streams-intro"}),"Redis Streams")," through the lens of RedisInsight. You will see how to use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.redislabs.com/develop/java/#using-lettuce"}),"Lettuce Java client")," to publish and consume messages using consumer groups.This is the first basic example that uses a single consumer."),Object(i.b)("h2",{id:"prerequisite"},"Prerequisite:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://openjdk.java.net/install/"}),"Install OpenJDK")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://maven.apache.org/install.html"}),"Install Apache Maven")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.redislabs.com/create"}),"Install Redis"))),Object(i.b)("h2",{id:"step-1-cloning-the-repository"},"Step 1. Cloning the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/redis-streams-101-java\n cd redis-streams-101-java\n mvn clean verify\n")),Object(i.b)("h2",{id:"step-2-run-the-producerpost-a-new-message"},"Step 2. Run the producer(Post a new message)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'\n mvn exec:java -Dexec.mainClass="com.kanibl.redis.streams.simple.RedisStreams101Producer" -Dexec.args="5"\n\n Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-guice/2.1.7/sisu-guice-2.1.7-noaop.jar (472 kB at 450 kB/s)\n Downloaded from central: https://repo.maven.apache.org/maven2/org/slf4j/slf4j-api/1.7.5/slf4j-api-1.7.5.jar (26 kB at 25 kB/s)\n Downloaded from central: https://repo.maven.apache.org/maven2/commons-codec/commons-codec/1.11/commons-codec-1.11.jar (335 kB at 313 kB/s)\n\n Sending 5 message(s)\n May 18, 2021 1:07:00 PM io.lettuce.core.EpollProvider <clinit>\n INFO: Starting without optional epoll library\n May 18, 2021 1:07:00 PM io.lettuce.core.KqueueProvider <clinit>\n INFO: Starting without optional kqueue library\n       Message 1621343220998-0 : {sensor_ts=1621343220975, loop_info=0, speed=15, direction=270} posted\n       Message 1621343221009-0 : {sensor_ts=1621343221007, loop_info=1, speed=15, direction=270} posted\n       Message 1621343221016-0 : {sensor_ts=1621343221011, loop_info=2, speed=15, direction=270} posted\n       Message 1621343221019-0 : {sensor_ts=1621343221017, loop_info=3, speed=15, direction=270} posted\n       Message 1621343221023-0 : {sensor_ts=1621343221021, loop_info=4, speed=15, direction=270} posted\n\n\n [INFO] ------------------------------------------------------------------------\n [INFO] BUILD SUCCESS\n [INFO] ------------------------------------------------------------------------\n [INFO] Total time:  9.102 s\n [INFO] Finished at: 2021-05-18T13:07:01Z\n [INFO] ------------------------------------------------------------------------\n \n')),Object(i.b)("h2",{id:"step-3-run-the-consumerconsume-messages"},"Step 3. Run the consumer(Consume messages)"),Object(i.b)("p",null,"Open a new terminal and run this command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"\n mvn exec:java -Dexec.main\n")),Object(i.b)("p",null,"The consumer will start and consume the message you just posted, and wait for any new messages."),Object(i.b)("h2",{id:"step-4-posting-the-new-messages"},"Step 4: Posting the new messages"),Object(i.b)("p",null,"In the first terminal, post 100 new messages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' mvn exec:java -Dexec.mainClass="com.kanibl.redis.streams.simple.RedisStreams101Producer" -Dexec.args="100"\n')),Object(i.b)("p",null,"Let us try to visualise using the RedisInsight browser tool. Make sure \u2018Stream Data\u2019 is selected and select any one of the streams. You\u2019ll see a table showing data in that stream along with a timestamp of when each entry was added."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:s(429).default,title:"image_tooltip"})),Object(i.b)("p",null,"To see the processing side of the stream select \u2018Stream Data\u201d. You will see 105 records under the streaming data."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:s(430).default,title:"image_tooltip"})),Object(i.b)("p",null,"Click on \u201cConsumer Groups\u201d to see application_1 as promising consumer."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:s(431).default,title:"image_tooltip"})),Object(i.b)("p",null,"RedisInsight also provide you to select fields as shown under \u201cView Columns\u201d section."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:s(432).default,title:"image_tooltip"})),Object(i.b)("h2",{id:"additional-links"},"Additional Links"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/explore/redisinsight/slowlog"}),"Slowlog Configuration using RedisInsight")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/explore/redisinsight/browser"}),"Explore Redis keys using RedisInsight browser tool")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/explore/redisinsight/memoryanalyzer"}),"Memory Analysis using RedisInsight"))))}u.isMDXComponent=!0},178:function(e,t,s){"use strict";var a=s(0),n=s.n(a),i=s(176),r=s(184);s(177),s(55);t.a=function(e){var t=n.a.useState(!1),s=t[0],a=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!s)}})))),s&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(i.a,{components:r.a},e.children)))}},179:function(e,t,s){"use strict";var a=s(0),n=s(180);t.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},180:function(e,t,s){"use strict";var a=s(0),n=Object(a.createContext)(void 0);t.a=n},181:function(e,t,s){"use strict";var a=s(0),n=s.n(a),i=s(179),r=s(183),o=s(56),l=s.n(o),c=37,u=39;t.a=function(e){var t=e.lazy,s=e.block,o=e.defaultValue,d=e.values,m=e.groupId,p=e.className,b=Object(i.a)(),h=b.tabGroupChoices,g=b.setTabGroupChoices,f=Object(a.useState)(o),j=f[0],O=f[1],v=a.Children.toArray(e.children);if(null!=m){var w=h[m];null!=w&&w!==j&&d.some((function(e){return e.value===w}))&&O(w)}var N=function(e){O(e),null!=m&&g(m,e)},y=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":s},p)},d.map((function(e){var t=e.value,s=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,s){switch(s.keyCode){case u:!function(e,t){var s=e.indexOf(t)+1;e[s]?e[s].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var s=e.indexOf(t)-1;e[s]?e[s].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},s)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},182:function(e,t,s){"use strict";var a=s(3),n=s(0),i=s.n(n);t.a=function(e){var t=e.children,s=e.hidden,n=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:s,className:n}),t)}},429:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/image16-f836b92d6eb88d65708f265ceb5b3999.png"},430:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/image17-155c7a654363e8bc371e37c1791d7b82.png"},431:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/image18-c2bc893d9a93df35ab96cef4756bb0ba.png"},432:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/image19-efa23e18b80c286c2570b7e209d58a6b.png"}}]);