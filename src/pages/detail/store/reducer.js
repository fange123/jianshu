import { fromJS } from "immutable";

const defaultState = fromJS({
  writeList: [
    {
      id: 1,
      title: "我要结婚了",
      desc: "阅读 608",
    },
    {
      id: 2,
      title: "该不该把家里的事告诉男友？",
      desc: "阅读 831",
    },
    {
      id: 3,
      title: "第一次带男友回家",
      desc: "阅读 908",
    },
  ],
  detail: {
    subTitle: "一个有才情的女子",
    time: "2022.02.08 19:58:07",
    money: "3490.9",
    words: "13,858",
    read: "752",
    collect: "48",
    title: "快要结婚了，可是我却哭了",
    imgUrl:
      "https://upload.jianshu.io/users/upload_avatars/15682939/03f3e062-ba29-4c49-89a3-bb8e97e7bb32.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
  },

  content: `<img
              alt=''
              src='data:image/jpeg;base64,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'
            />
            <p>
              我和男友结婚日子定了，因为我在湖北，他在深圳，所以我这边5月1号嫁，他那边5月20号娶。
            </p>
            <p>
              我是湖北农村的，他老家是广西的，临近结婚，却发生了很多争吵，争吵的原因就是礼节问题和各自成长环境的不同。
            </p>

            <p>
              我在湖北长大，这边就是很重视长辈的想法，什么都是舅舅为大，彩礼也受的重，要了男友20万，这些男友家里都接受。
            </p>

            <p>
              男友在广西长大，因为家庭因素，亲戚往来淡泊，基本不往来，只是一家亲，其他亲戚老死不相往来。
            </p>
            <p>
              我们是在一个习俗上发生的争吵，我妈妈说他要娶我，还要另外给2万我妈妈，让她分给亲戚，俗称下乡钱，我男友和他家里都不同意，说干嘛分给亲戚，我也是才知道这个钱，我就跟妈妈说要不就不要这个钱，我妈说那怎么行，每个嫁女儿的都要出这个钱。
            </p>

            <p>
              双方僵持不下，我确实之前没有听说我这个钱，我男友不想出的原因是凭什么给亲戚，因为他说给我爸妈都行，为什么要给亲戚，我也不清楚，我妈又没有提前跟我说，搞得我好烦。
            </p>
            <p>
              再者，我男友这边不满意的是，我妈一会这样，一会那样的，不一次性说清楚要多少，搞得我男友这边不好规划。
            </p>`,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      break;
  }
  return state;
};

export default reducer;
