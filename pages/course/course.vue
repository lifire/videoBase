<template>
	<view>
		<u-empty v-if="!videoData" text="页面不存在" mode="list" margin-top="220"></u-empty>
		<template v-else>
			<u-sticky h5-nav-height="0">			
				<view class="vidoe">
					<video
						id="myVideo"
						:src="videoPath || videoData.list[0].path"
						:title="videoData.title"
						:poster="videoPoster"
						direction="-90"
						@play="playCallback"
						@pause="pauseCallback"
						@loadedmetadata="loadedmetadataCallback"
						controls></video>
						<view class="loading" v-show="videoLoading">
							<u-loading mode="flower" size="64" :show="videoLoading"></u-loading>
						</view>
				</view>
			</u-sticky>
			<view class="u-p-24">
				<view class="title u-font-36">
					{{videoData.title}}
				</view>
				<view class="sub-title u-font-12">
					<text class="author">{{videoData.author}}</text>·<text class="author-dec">{{videoData.authorDec}}</text>
				</view>
			</view>
			<view class="list">
				<scroll-view scroll-x="true">
					<view :class="[current == index ? 'list-item-active':'','list-item']" v-for="(item,index) in videoData.list" :key="index">
						<view class="u-line-2" @click="change(index)">{{item.name}}</view class="u-line-3">
					</view>
				</scroll-view>
			</view>
			<view class="dec">
				<rich-text :nodes="videoData.dec"></rich-text>
			</view>
		</template>
	</view>
</template>

<script>
	import courseData from '../../static/js/courseData.js'
	export default {
		data() {
			return {
				videoPath: '',
				videoPoster: '',
				videoLoading: false,
				videoData: '',
				current:0
			}
		},
		onLoad(option) {
			let thisCourse = courseData.courseData[option.courseId]
			if(thisCourse){				
				this.videoData = thisCourse
				this.videoPoster = thisCourse.list[0].poster //视频默认图片为第一节图片
				uni.setNavigationBarTitle({
					title:thisCourse.title
				})
			}
		},
		onReady: function (res) {
			this.videoContext = uni.createVideoContext('myVideo', this)
		},
		mounted() {
		},
		methods: {
			//切换章节
			change(index){
				this.current = index
				this.videoLoading = true
				
				let currentItem = this.videoData.list[index]
				this.videoPath = currentItem.path
				this.videoPoster = currentItem.poster
				uni.setNavigationBarTitle({
					title:currentItem.name
				})
			},
			//play
			playCallback(){
				this.videoLoading = false
			},
			//pause
			pauseCallback(){
				
			},
			//加载结束
			loadedmetadataCallback(){
				this.videoLoading = false
				this.videoContext.play()
			}
		}
	}
</script>
<style lang="scss" scoped>
	.vidoe {
		position: relative;
		width: 750rpx;
		height: 750rpx*9rpx/16rpx;
		video {
			width: 100%;
			height: 100%;
		}
		.loading{
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}
	//标题
	.title{
		font-weight: bold;
		margin-bottom: 4rpx;
	}
	.sub-title{
		color: $u-tips-color;
		.author{
			margin-right: 10rpx;
		}
		.author-dec{
			margin-left: 10rpx;
		}
	}
	//章节列表
	.list{
		padding-left: 24rpx;
		padding-bottom: 24rpx;
		white-space: nowrap;
		border-bottom: 24rpx solid $u-border-color;
		.list-item{
			display: inline-block;
			padding: 20rpx;
			margin-right: 20rpx;
			width: 174rpx;
			height: 63rpx;
			line-height: 1.312;
			white-space: normal;
			vertical-align: top;
			border-radius: 12rpx;
			background-color: $u-bg-color;
			font-size: 24rpx;
			&:last-child{
				margin-right: 24rpx;
			}
			&.list-item-active{
				color: $u-type-warning;
			}
		}
	}
</style>
