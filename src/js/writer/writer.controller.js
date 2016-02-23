class WriterCtrl {
  constructor(Articles, $state) {
    'ngInject';

    this.tagField = '';
    this.isSubmitting = false;

    this.article = {
      title: '',
      description: '',
      body: '',
      tag_list: []
    }

    this.addTag = () => {
      // array includes method
      if (!this.article.tag_list.includes(this.tagField) && !this.isSubmitting) {
        this.article.tag_list.push(this.tagField);
        this.tagField = '';
      }
    }

    this.removeTag = (tagName) => {
      if (!this.isSubmitting) {
        this.article.tag_list = this.article.tag_list.filter((slug) => slug != tagName);
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
