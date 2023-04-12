import { useCallback, useState } from 'react'
import { courses } from '../data';

function CoursesFilter() {
    
    const [coursesList, setCoursesList] = useState(courses);

    const [selectedPrice, setSelectedPrice] = useState<number[]>([0, 1000]);
    const [categories, setCategories] = useState<Set<string>>(new Set());
    const [rating, setRating] = useState<Set<number>>(new Set());
    const [instructors, setInstructors] = useState<Set<string>>(new Set());
    const [levels, setLevels] = useState<Set<string>>(new Set());
    const [searchInput, setSearchInput] = useState<string>('');
    const [sort, setSort] = useState<string>("Default");

    const handleCategoryFilter = (event) => {
			setCategories(prev => {
				let filters = new Set(prev)
				if (event.target.checked) {
					filters.add(event.target.value)
				} else {
					filters.delete(event.target.value)
				}
				return filters;
			})
    };

    const handleRatingFilter = (event) => {
    setRating(prev => {
			let ratingFilters = new Set(prev)
			if (event.target.checked) {
        ratingFilters.add(parseInt(event.target.value))
			} else {
        ratingFilters.delete(parseInt(event.target.value))
			}
			return ratingFilters;
    })
    };

    const handleInstructorsFilter = (event) => {
    setInstructors(prev => {
			let instructorsFilters = new Set(prev)
			if (event.target.checked) {
        instructorsFilters.add(event.target.value)
			} else {
        instructorsFilters.delete(event.target.value)
			}
        return instructorsFilters;
    })
    };

    const handleLevelsFilter = (event) => {
    setLevels(prev => {
			let levelsFilters = new Set(prev)
			if (event.target.checked) {
        levelsFilters.add(event.target.value)
			} else {
        levelsFilters.delete(event.target.value)
			}
        return levelsFilters;
    })
    };

    const handleChangePrice = (event) => {
			setSelectedPrice(event);
    };

		const applyFilters = useCallback(() => {
			let updatedCourses = courses;

			// Categories Filter
			if (categories.size) {
				updatedCourses = updatedCourses.filter(course => {
					return categories.has(course.category)
				})
			}

			// Rating Filter
			if (rating.size) {
				updatedCourses = updatedCourses.filter(course => {
				return rating.has(course.review)
				})
			}

			// Instructors Filter
			if (instructors.size) {
				updatedCourses = updatedCourses.filter(course => {
					return instructors.has(course.teacherName)
				})
			}

			// Levels Filter
			if (levels.size) {
				updatedCourses = updatedCourses.filter(course => {
					return levels.has(course.level)
				})
			}
			
			// Price Filter
			const minPrice = selectedPrice[0];
			const maxPrice = selectedPrice[1];

			updatedCourses = updatedCourses.filter(
				(item) => item.price >= minPrice && item.price <= maxPrice
			);
			
			// Search Filter
			if (searchInput) {
				updatedCourses = updatedCourses.filter(
					(course) => course.title.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
				);
			}

			if(sort === 'priceAsc') {
				// [...updatedCourses]
				updatedCourses = updatedCourses.sort((a, b) => a.price - b.price);
			} else if(sort === 'priceDes') {
				updatedCourses = updatedCourses.sort((a, b) => b.price - a.price);
			} else if(sort === 'nameAsc') {
				updatedCourses = updatedCourses.sort((a, b) => a.title > b.title ? 1 : -1);
			} else if(sort === 'nameDes') {
				updatedCourses = updatedCourses.sort((a, b) => a.title > b.title ? -1 : 1);
			}

			setCoursesList(updatedCourses);
		}, [categories, instructors, levels, rating, searchInput, selectedPrice, sort]);

		const handleSort = (event) => {
			setSort(event.target.value);
		}
  return {categories, rating, instructors, selectedPrice, levels, searchInput, sort, coursesList, setSearchInput, handleCategoryFilter, handleRatingFilter, handleInstructorsFilter,
		handleLevelsFilter, handleChangePrice, applyFilters, handleSort};
}

export default CoursesFilter