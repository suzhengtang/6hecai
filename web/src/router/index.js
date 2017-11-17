import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import speak from '@/views/first/speak'
import things from '@/views/first/things'
import zheng from '@/views/first/zheng'
import fen from '@/views/first/fen'
import date from '@/views/first/date'
import history from '@/views/first/history'
import picture from '@/views/first/picture'
import one from '@/views/secend/one'
import two from '@/views/secend/two'
import three from '@/views/secend/three'
import fore from '@/views/secend/fore'
import five from '@/views/secend/five'
import six from '@/views/secend/six'
import seven from '@/views/secend/seven'
import eight from '@/views/secend/eight'
import nine from '@/views/secend/nine'
import ten from '@/views/secend/ten'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: home
		},
		{
			path: '/speak',
			name: 'speak',
			component: speak
		},
		{
			path: '/things',
			name: 'things',
			component: things
		},
		{
			path: '/zheng',
			name: 'zheng',
			component: zheng
		},
		{
			path: '/fen',
			name: 'fen',
			component: fen
		},
		{
			path: '/date',
			name: 'date',
			component: date
		},
		{
			path: '/history',
			name: 'history',
			component: history
		},
		{
			path: '/picture',
			name: 'picture',
			component: picture
		},
		{
			path: '/picture/one',
			name: 'one',
			component: one
		},
		{
			path: '/picture/two',
			name: 'two',
			component: two
		},
		{
			path: '/picture/three',
			name: 'three',
			component: three
		},
		{
			path: '/picture/fore',
			name: 'fore',
			component: fore
		},
		{
			path: '/picture/five',
			name: 'five',
			component: five
		},
		{
			path: '/picture/six',
			name: 'six',
			component: six
		},
		{
			path: '/picture/seven',
			name: 'seven',
			component: seven
		},
		{
			path: '/picture/eight',
			name: 'eight',
			component: eight
		},
		{
			path: '/picture/nine',
			name: 'nine',
			component: nine
		},
		{
			path: '/picture/ten',
			name: 'ten',
			component: ten
		}
	]
})
