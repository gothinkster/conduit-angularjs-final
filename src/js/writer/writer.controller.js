class WriterCtrl {
  constructor(Articles, $state) {
    'ngInject';

    this.tagField = '';
    this.isSubmitting = false;

    this.article = {
      title: '',
      description: '',
      body: '',
      tagList: []
    }

    this.addTag = () => {
      // array includes method
      if (!this.article.tagList.includes(this.tagField) && !this.isSubmitting) {
        this.article.tagList.push(this.tagField);
        this.tagField = '';
      }
    }

    this.removeTag = (tagName) => {
      if (!this.isSubmitting) {
        this.article.tagList = this.article.tagList.filter((slug) => slug != tagName);
      }
    }

    this.save = () => {
      console.log(this.article);

      this.isSubmitting = true;

      Articles.create(this.article).then(
        (article) => {
          console.log(article)
        },
        (err) => {
          this.isSubmitting = false;
          this.errors = err.data.errors;
        }
      );

    }

  }
}


export default WriterCtrl;
