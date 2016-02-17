class WriterCtrl {
  constructor($state) {
    'ngInject';

    this.tagField = '';
    this.isSubmitting = false;

    this.article = {
      title: '',
      body: '',
      tags: []
    }

    this.addTag = () => {
      // array includes method
      if (!this.article.tags.includes(this.tagField) && !this.isSubmitting) {
        this.article.tags.push(this.tagField);
        this.tagField = '';
      }
    }

    this.removeTag = (tagName) => {
      if (!this.isSubmitting) {
        this.article.tags = this.article.tags.filter((slug) => slug != tagName);
      }
    }

    this.save = () => {
      console.log(this.article);
      this.isSubmitting = true;
    }

  }
}


export default WriterCtrl;
