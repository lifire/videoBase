const Mock = require('mockjs');
const Host = '/h5/static/course';

let course1Dec = ["pexels-photo-4666665.jpeg","pexels-photo-4666665.jpeg"];
let course1 = [{
	title: '课程名称一',
	author: '视频作者',
	authorDec: '作者头衔',
	dec: templateDec(course1Dec,'course1'),
	list: [{
		name: '章节名称1',
		id: '1',
		path: Host+'/course1/1586849499068-0413_shenzhen_25p.mov.mp4',
		poster: Host+'/course1/pexels-photo-4666665.jpeg'
	}, {
		name: '章节名称2',
		id: '2',
		path: Host+'/course1/b_kEvNeiXVIBce1589643758.mp4',
		poster: Host+'/course1/pexels-photo-4665519.jpeg'
	}, {
		name: '章节名称章节名称章节名称章节名称章节名称章节名称章节名称章节名称3',
		id: '3',
		path: Host+'/course1/1587704424757-guangzhouyanshi0424.mp4',
		poster: Host+'/course1/pexels-photo-4666665.jpeg'
	}, {
		name: '章节名称章节名称4',
		id: '4',
		path: Host+'/course1/b_kEvNeiXVIBce1589643758.mp4',
		poster: Host+'/course1/pexels-photo-4665519.jpeg'
	}, {
		name: '章节名称5',
		id: '5',
		path: Host+'/course1/1587704424757-guangzhouyanshi0424.mp4',
		poster: Host+'/course1/pexels-photo-4666665.jpeg'
	}]
}]

let course2Dec = ["pexels-photo-4666665.jpeg","pexels-photo-4666665.jpeg"];
let course2 = [{
	title: '课程名称二',
	author: '视频作者',
	authorDec: '作者头衔',
	dec: templateDec(course2Dec,"course2"),
	list: [{
		name: '课程二章节名称1',
		id: '1',
		path: Host+'/course2/1586849499068-0413_shenzhen_25p.mov.mp4',
		poster: Host+'/course2/pexels-photo-4666665.jpeg'
	}, {
		name: '课程二章节名称2',
		id: '2',
		path: Host+'/course2/b_kEvNeiXVIBce1589643758.mp4',
		poster: Host+'/course2/pexels-photo-4665519.jpeg'
	}, {
		name: '课程二章节名称章节名称章节名称章节名称章节名称章节名称章节名称章节名称3',
		id: '3',
		path: Host+'/course2/1587704424757-guangzhouyanshi0424.mp4',
		poster: Host+'/course2/pexels-photo-4666665.jpeg'
	}, {
		name: '课程二章节名称章节名称4',
		id: '4',
		path: Host+'/course2/b_kEvNeiXVIBce1589643758.mp4',
		poster: Host+'/course2/pexels-photo-4665519.jpeg'
	}, {
		name: '课程二章节名称5',
		id: '5',
		path: Host+'/course2/1587704424757-guangzhouyanshi0424.mp4',
		poster: Host+'/course2/pexels-photo-4666665.jpeg'
	}]
}]



let courseData = [...course1,...course2]

let listData = [{
	id: 0,
	title: Mock.Random.ctitle(),
	imgPath: Host+'/course2/pexels-photo-4666665.jpeg'
}, {
	id: 1,
	title: Mock.Random.ctitle(),
	imgPath: Host+'/course2/pexels-photo-4665519.jpeg'
}, {
	id: 2,
	title: Mock.Random.ctitle(),
	imgPath: Host+'/course2/pexels-photo-4666665.jpeg'
}, {
	id: 3,
	title: Mock.Random.ctitle(),
	imgPath: Host+'/course2/pexels-photo-4665519.jpeg'
}]

//介绍模板：全图片
function templateDec(arr,fileName) {
  return arr.map((item)=>`
          <img class="dec-img" width="100%" src="${Host}/${fileName}/${item}">
      `).join('');
}

export default {
	listData,
	courseData
}
