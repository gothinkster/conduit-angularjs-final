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
      if (this.article.tags.indexOf(this.tagField) < 0 && !this.isSubmitting) {
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
