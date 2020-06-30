<template>
	<view class="content">
		<view class="list">
			<view class="list-item" v-for="item in list" :key="item.id">
				<u-image 
					:src="item.imgPath" 
					:lazy-load="true"
					@click="gotoDetail(item.id)"
					height="100%"
					border-radius="12">
					<u-loading slot="loading"></u-loading>
				</u-image>
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import listData from '../../static/js/courseData.js'
	export default {
		data() {
			return {
				title: 'Hello',
				list: listData.listData
			}
		},
		onLoad() {

		},
		mounted() {
			// let arr = []
			// for(let i = 0; i<4; i++){
			// 	let ctitle = this.$mock.Random.ctitle()
			// 	let data = {
			// 			id:i, 
			// 			title:ctitle,
			// 			imgPath: this.$mock.Random.image('720x300', this.$mock.Random.color(),i)
			// 		}
			// 	arr.push(data)
			// }
			// this.list = arr
		},
		methods: {
			gotoDetail(id){
				uni.navigateTo({
					url:"../course/course?courseId="+id
				})
			}
		}
	}
</script>

<style lang="less">
	.list{
		padding: 24rpx;
		.list-item{
			position: relative;
			height: (750-24*2)*9/16rpx;
			margin-bottom: 24rpx;
			text{
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				color: #fff;
				padding: 16rpx 24rpx;
				background-color: rgba(0,0,0,.25);
				border-bottom-left-radius: 12rpx;
				border-bottom-right-radius: 12rpx;
			}
		}
	}
</style>
