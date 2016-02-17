class FollowBtnCtrl {
  constructor() {
    'ngInject';
    this.test = () => {
      console.log('its works')
    }
  }
}

let FollowBtn= {
  bindings: {
    authorData: '='
  },
  controller: FollowBtnCtrl,
  templateUrl: 'components/follow-btn.html'
};

export default FollowBtn;
