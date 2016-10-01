const pageData = {
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 3000,
        duration: 1000,

        top_stories: [],
        stories: []
    },

    onLoad: function() {
        fetchTopics((res) => {
            const data = res.data;
            console.log(data);
            this.setData({
                top_stories: data.top_stories,
                stories: data.stories
            });
        });
    }
};

// Fetch Topics

function fetchTopics (cb) {
    wx.request({
        url: 'https://news-at.zhihu.com/api/4/news/latest',
        headers: {
            'Content-Type': 'application/json'
        },
        success: cb
    });
}

Page(pageData);