const state = {
	username: ""
};


const actions = {};

const mutations = {
	SET_NAME: (state, name) => {
		state.username = name;
	}
};

export default {
	state,
	actions,
	mutations
};