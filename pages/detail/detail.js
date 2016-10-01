const pageData = {
    data: {
        topic: {}
    },

    onLoad: function(options) {
        const id = options.id;
        fetchTopic(id, (res) => {
            console.log(res);
            this.setData({
                topic: res.data
            });
        });
    }
};

// Fetch Topic

function fetchTopic (id, cb) {
    wx.request({
        url: 'http://news-at.zhihu.com/api/4/news/'+id,
        headers: {
            'Content-Type': 'application/json'
        },
        success: cb
    });
}

Page(pageData);