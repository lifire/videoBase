<template>
	<view>
		<view class="vidoe">
			<video :src="videoPath || videoData.list[0].path" controls></video>
		</view>
		<view class="title u-p-20 u-font-36">
			{{videoData.name}}
		</view>
		<view class="list">
			<view class="list-item" v-for="(item,index) in videoData.list" :key="index">
				<view class="u-line-3" @click="change(index)">{{item.name}}</view class="u-line-3">
			</view>
		</view>
		<view class="dec u-p-20">
			<rich-text :nodes="videoData.dec"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoPath: '',
				videoData: {
					name: '课程名称一',
					dec: '<p>这是一段介绍<p>',
					list: [{
						name: '章节名称1',
						id: '1',
						path: '../../static/course1/1586849499068-0413_shenzhen_25p.mov.mp4'
					}, {
						name: '章节名称2',
						id: '2',
						path: '../../static/course1/b_kEvNeiXVIBce1589643758.mp4'
					}, {
						name: '章节名称章节名称章节名称章节名称章节名称章节名称章节名称章节名称3',
						id: '3',
						path: '../../static/course1/1587704424757-guangzhouyanshi0424.mp4'
					}, {
						name: '章节名称章节名称4',
						id: '4',
						path: '../../static/course1/1587704424757-guangzhouyanshi0424.mp4'
					}, {
						name: '章节名称5',
						id: '5',
						path: '../../static/course1/1587704424757-guangzhouyanshi0424.mp4'
					}]
				},
				current:0
			}
		},
		mounted() {
		},
		methods: {
			change(index){
				console.log(index)
				this.current = index
				this.videoPath = this.videoData.list[index].path
			}
		}
	}
</script>

<style lang="less" scoped>
	.vidoe {
		width: 750rpx;
		height: 750*9/16rpx;

		video {
			width: 100%;
			height: 100%;
		}
	}
	.list{
		padding: 0 10rpx;
		overflow: auto;
		white-space: nowrap;
		.list-item{
			display: inline-block;
			padding: 20rpx;
			margin: 0 10rpx;
			width: 180rpx;
			height: 94rpx;
			white-space: normal;
			vertical-align: top;
			border-radius: 12rpx;
			background-color: #f2f2f2;
			font-size: 24rpx;
		}
	}
</style>
