import { defineStore } from 'pinia';

export const useSessionStorageStore = defineStore({
	id: 'Person',
	state: () => ({
		// 在这里定义你需要存储在 sessionStorage 中的数据
		personData: [],
	}),
	actions: {
		// 设置 sessionStorage 中的数据
		setSessionData(data) {
			this.personData.push(data);
			sessionStorage.setItem('person', JSON.stringify(this.personData));
		},
		// 获取 sessionStorage 中的数据
		getSessionData() {
			const data = sessionStorage.getItem('person');
			if (data) {
				this.personData = JSON.parse(data);
			}
			return this.personData;
		},
		loadData() {
			// 从sessionStorage中获取数据
			const data = JSON.parse(sessionStorage.getItem('person'));
			// 更新store中的数据
			this.personData = data;
			return data;
		},
		// 清除sessionStorage中的数据
		clearData() {
			// 清除sessionStorage中的数据
			sessionStorage.removeItem('myData');
			// 更新store中的数据
			this.personData = [];
		},
	},
});
