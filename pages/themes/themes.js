const pageData = {
    data: {
        themes: []
    },

    onLoad: function() {
        fetchThemes((res) => {
            const data = res.data;
            console.log(data);
            this.setData({
                themes: data.others
            });
        });
    }
};

// Fetch fetchThemes

function fetchThemes (cb) {
    wx.request({
        url: 'http://news-at.zhihu.com/api/4/themes',
        headers: {
            'Content-Type': 'application/json'
        },
        success: cb
    });
}

Page(pageData);