const pageData = {
    data: {
        stories: []
    },

    onLoad: function(options) {
        fetchStories(options.id, (res) => {
            const data = res.data;
            console.log(data);
            this.setData({
                stories: data.stories
            });
        });
    }
};

// Fetch fetchStories

function fetchStories (id, cb) {
    wx.request({
        url: 'http://news-at.zhihu.com/api/4/theme/' + id,
        headers: {
            'Content-Type': 'application/json'
        },
        success: cb
    });
}

Page(pageData);