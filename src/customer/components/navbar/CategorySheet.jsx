import React from 'react'
import {MenLevelTwo} from '../../../data/category/LevelTwo/MenLevelTwo'
import { WomenLevelTwo } from '../../../data/category/LevelTwo/WomenLevelTwo'
import {ElectronicsLevelTwo} from '../../../data/category/LevelTwo/ElectronicsLevelTwo'
import {FurnitureLevelTwo} from '../../../data/category/LevelTwo/FurnitureLevelTwo'

import {MenLevelThree} from '../../../data/category/LevelThree/MenLevelThree'
import { WomenLevelThree } from '../../../data/category/LevelThree/WomenLevelThree'
import {ElectronicsLevelThree} from '../../../data/category/LevelThree/ElectronicsLevelThree'
import {FurnitureLevelThree} from '../../../data/category/LevelThree/FurnitureLevelThree'
import { Box } from '@mui/material'
const CategoryTwo={
    men: MenLevelTwo,
    women: WomenLevelTwo,
    electronics: ElectronicsLevelTwo,
    home_furniture: FurnitureLevelTwo
}
const CategoryThee={
    men: MenLevelThree,
    women: WomenLevelThree,
    electronics: ElectronicsLevelThree,
    home_furniture: FurnitureLevelThree
}
const CategorySheet = ({SelectedCategory,seyShowSheet}) => {

    const childCategory = (category, parentCategoryId) => {
        return category.filter(child => child.parentCategoryId === parentCategoryId);
    }
    
  return (
    <Box className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
        <div className='flex text-sm flex-wrap'>
            {
                CategoryTwo[SelectedCategory]?.map((item,index) => <div
                className={`p-8 lg:w-[20%] ${index%2===0?"bg-slate-50":"bg-white"}`}>
                    <p className='text-primary-color mb-5 font-semibold'>{item.name}</p>
                    <ul className='space-y-3'>
                        {childCategory(CategoryThee[SelectedCategory], item.categoryId).map(
                            (item) => <div><li className='hover:text-primary-color cursor-pointer'>
                            {item.name}
                        </li></div>
                        )}
                        
                    </ul>
                    </div>)
            }
        </div>
    </Box>
  )
}

export default CategorySheet
