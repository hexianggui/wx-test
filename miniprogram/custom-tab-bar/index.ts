// custom-tab-bar/index.ts
import TabMenu from './data';
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    value: 'home',
    list: TabMenu,
    theme: {
      custom: {
        colorPrimary: '#333',
      },
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event: any) {
      // console.log('点击', event)
      const index = this.data.list.findIndex(e => e.value == event.detail.value)
      if (index < 0) {
        return
      }
      const item = this.data.list[index]
      wx.switchTab({
        url: item.url.startsWith('/')
          ? item.url
          : `/${item.url}`,
      })
      .then(res=>{
        this.setData({ value: event.detail.value });
      });
    
      console.log('点击', this.data.value)
    },

    init() {
      console.log('init')
      // const page = getCurrentPages().pop();
      // const route = page ? page.route.split('?')[0] : '';
      // const active = this.data.list.findIndex(
      //   (item) =>
      //     (item.url.startsWith('/') ? item.url.substr(1) : item.url) ===
      //     `${route}`,
      // );
      // this.setData({ value });
    },
  }
})
