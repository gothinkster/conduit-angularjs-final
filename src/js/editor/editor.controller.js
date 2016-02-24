class EditorCtrl {
  constructor(Articles, article, $state) {
    'ngInject';

    this._$state = $state;

    this.tagField = '';
    this.isSubmitting = false;

    if (!article) {
      this.article = {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    } else {
      this.article = article;
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

    this.submit = () => {
      this.isSubmitting = true;

      Articles.save(this.article).then(
        (newArticle) => {
          this._$state.go('app.article', { slug: newArticle.slug });
        },
        (err) => {
          this.isSubmitting = false;
          this.errors = err.data.errors;
        }
      );

    }

  }
}


export default EditorCtrl;
