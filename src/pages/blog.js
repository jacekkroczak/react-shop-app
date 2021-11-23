import React from 'react';

// *** COMPONENTS *** //
import AddBlogItem from '../components/Blog/AddBlogItem';
import BlogList from '../components/Blog/BlogList';
import EditBlogItem from '../components/Blog/EditBlogItem';

// *** CSS *** //
import styles from './Styles/blog.module.css';

class Blog extends React.Component {
	constructor() {
		super();
		this.AddItem = this.AddItem.bind(this);
		this.EditItem = this.EditItem.bind(this);
		this.RemoveItem = this.RemoveItem.bind(this);
		this.updateEditItem = this.updateEditItem.bind(this);
		this.CloseEditItem = this.CloseEditItem.bind(this);
		this.state = {
			list: [],
			editItem: '',
			showEditForm: false,
		};
		this.scrollRef = React.createRef();
	}

	AddItem(item) {
		const list = this.state.list;
		this.setState({
			list: [...list, item],
		});
	}

	EditItem(editItem) {
		this.scrollRef.current.scrollIntoView();
		this.setState({ showEditForm: true });
		const list = this.state.list;
		list.map((item) => {
			if (item.id === editItem.id) {
				return editItem;
			} else {
				return null;
			}
		});
		this.setState({ editItem: editItem });
	}

	updateEditItem(updatedItem) {
		const list = [...this.state.list];
		const index = list.findIndex((item) => item.id === updatedItem.id);
		list[index].title = updatedItem.title;
		list[index].description = updatedItem.description;
		list[index].author = updatedItem.author;
		this.setState({ list });
		this.setState({ showEditForm: false });
	}

	RemoveItem(id) {
		const list = this.state.list;
		const modifyList = list.filter((post) => {
			return post.id !== id;
		});
		this.setState({ list: modifyList });
	}

	CloseEditItem() {
		this.setState({ showEditForm: false });
	}

	render() {
		const list = this.state.list;
		const editItem = this.state.editItem;
		const showEditForm = this.state.showEditForm;
		return (
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.header}>Blog</h1>
					<p ref={this.scrollRef} className={styles.paragraphDescription}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
						congue felis. Maecenas vitae mollis magna. Curabitur eget
						ullamcorper nibh, vel tempus erat. Etiam eget ex ac lacus tristique
						facilisis. Duis libero quam, pharetra vitae metus.
					</p>
				</div>
				<div className={styles.blogContent}>
					{showEditForm ? (
						<EditBlogItem
							editItem={editItem}
							onCloseBlogEditItem={this.CloseEditItem}
							onUpdateBlogItem={this.updateEditItem}
						/>
					) : (
						<>
							<AddBlogItem onSubmitBlogItem={this.AddItem} />
							<BlogList
								list={list}
								onEditBlogItem={this.EditItem}
								onRemoveBlogItem={this.RemoveItem}
							/>
						</>
					)}
				</div>
			</div>
		);
	}
}

export default Blog;
