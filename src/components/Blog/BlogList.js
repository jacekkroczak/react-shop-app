import React from 'react';

// *** CSS *** //
import styles from './Styles/BlogList.module.css';

class BlogList extends React.Component {
	handleEdit(item) {
		this.props.onEditBlogItem(item);
	}

	handleRemove(id) {
		this.props.onRemoveBlogItem(id);
	}

	render() {
		const list = this.props.list;
		return (
			<div>
				{list.length > 0 ? (
					list.map((item) => (
						<div className={styles.section} key={item.id}>
							<div className={styles.sectionContent}>
								<div className={styles.header}> {item.title} </div>
								<div className={styles.description}>{item.description}</div>
								<div className={styles.author}>{item.author}</div>
							</div>
							<div className={styles.sectionButtons}>
								<button
									className={styles.editButton}
									onClick={() => this.handleEdit(item)}
								>
									Edit post
								</button>
								<button
									className={styles.removeButton}
									onClick={() => this.handleRemove(item.id)}
								>
									Remove post
								</button>
							</div>
						</div>
					))
				) : (
					<div className={styles.noPost}>
						No posts yet... Use the section above to add Post
					</div>
				)}
			</div>
		);
	}
}

export default BlogList;
