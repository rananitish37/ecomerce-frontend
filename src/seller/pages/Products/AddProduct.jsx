import { AddPhotoAlternate, Close, Description } from "@mui/icons-material";
import * as colors from "@mui/material/colors";
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { mainCategory } from "../../../data/category/mainCategory";
import { MenLevelThree } from "../../../data/category/LevelThree/MenLevelThree";
import { WomenLevelThree } from "../../../data/category/LevelThree/WomenLevelThree";
import { FurnitureLevelThree } from "../../../data/category/LevelThree/FurnitureLevelThree";
import { ElectronicsLevelThree } from "../../../data/category/LevelThree/ElectronicsLevelThree";
import { FurnitureLevelTwo } from "../../../data/category/LevelTwo/FurnitureLevelTwo";
import { ElectronicsLevelTwo } from "../../../data/category/LevelTwo/ElectronicsLevelTwo";
import { MenLevelTwo } from "../../../data/category/LevelTwo/MenLevelTwo";
import { WomenLevelTwo } from "../../../data/category/LevelTwo/WomenLevelTwo";
import { uploadToCloudinary } from "../../../Util/uploadToCloudinary";
import { useFormik } from "formik";
import React, { useState } from "react";

const categoryTwo = {
  men: MenLevelTwo,
  women: WomenLevelTwo,
  kids: [],
  home_furniture: FurnitureLevelTwo,
  beauty: [],
  electronics: ElectronicsLevelTwo,
};

const categoryThree = {
  men: MenLevelThree,
  women: WomenLevelThree,
  kids: [],
  home_furniture: FurnitureLevelThree,
  beauty: [],
  electronics: ElectronicsLevelThree,
};

const AddProduct = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const [snackbarOpen, setOpenSnackbar] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      mrpPrice: "",
      sellingPrice: "",
      quantity: "",
      color: "",
      images: [],
      category: "",
      category2: "",
      category3: "",
      sizes: "",
    },
  });

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setUploadImage(true);
    const image = await uploadToCloudinary(file);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadImage(false);
  };

  const handleRemoveImage = (index) => {
    const uploadImage = [...formik.values.images];
    uploadImage.splice(index, 1);
    formik.setFieldValue("images", uploadImage);
  };

  const childCategory = (category, parentCategoryId) => {
    return category.filter((child) => {
      return child.parentCategoryId == parentCategoryId;
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <Grid container spacing={2}>
          <Grid className="flex flex-wrap gap-5" sx={12}>
            <input
              type="file"
              accept="image/"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label className="relative" htmlFor="fileInput">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                <AddPhotoAlternate className="text-gray-700" />
              </span>
              {uploadImage && (
                <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                  <CircularProgress />
                </div>
              )}
            </label>

            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((image, index) => (
                <div className="relative">
                  <img
                    className="w-24 h-24 object-cover"
                    key={index}
                    src={image}
                    alt={`ProductImage ${index + 1}`}
                  />
                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    className=""
                    size="small"
                    color="error"
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      outline: "none",
                    }}
                  >
                    <Close sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              required
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              required
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              id="mrp_price"
              name="mrpPrice"
              label="MRP Price"
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
              helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
              required
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              id="sellingPrice"
              name="sellingPrice"
              label="Selling Price"
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              error={
                formik.touched.sellingPrice &&
                Boolean(formik.errors.sellingPrice)
              }
              helperText={
                formik.touched.sellingPrice && formik.errors.sellingPrice
              }
              required
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.color && Boolean(formik.errors.color)}
              required
            >
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                name="color"
                value={formik.values.color}
                onChange={formik.handleChange}
                label="Color"
              >
                <MenuItem>
                  <em>None</em>
                </MenuItem>

                {/* {colors.map((color, index) => (
                  <MenuItem value={color.name}>
                    <div className="flex gap-3">
                      <span
                        style={{ backgroundColor: color.hex }}
                        className={`h-5 w-5 rounded-full ${
                          color.name === "White" ? "border" : ""
                        }`}
                      ></span>
                      <p>{color.name}</p>
                    </div>
                  </MenuItem>
                ))} */}
                {[
                  "red",
                  "blue",
                  "green",
                  "orange",
                  "purple",
                  "pink",
                  "teal",
                  "cyan",
                ].map((colorName) => {
                  const color = colors[colorName];
                  return (
                    <MenuItem key={colorName} value={colorName}>
                      <div className="flex items-center gap-3">
                        <span
                          style={{ backgroundColor: color[500] }}
                          className={`h-5 w-5 rounded-full border ${
                            colorName === "common" ? "border-black" : ""
                          }`}
                        />
                        <span>
                          {colorName.charAt(0).toUpperCase() +
                            colorName.slice(1)}
                        </span>
                      </div>
                    </MenuItem>
                  );
                })}
              </Select>
              {formik.touched.color && formik.errors.color && (
                <FormHelperText>{formik.errors.color}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.sizes && Boolean(formik.errors.sizes)}
              required
            >
              <InputLabel id="size-label">Size</InputLabel>
              <Select
                labelId="size-label"
                id="size"
                name="size"
                value={formik.values.sizes}
                onChange={formik.handleChange}
                label="Size"
              >
                <MenuItem>
                  <em>None</em>
                </MenuItem>
                <MenuItem>
                  <em>FREE</em>
                </MenuItem>
                <MenuItem>
                  <em>S</em>
                </MenuItem>
                <MenuItem>
                  <em>M</em>
                </MenuItem>
                <MenuItem>
                  <em>L</em>
                </MenuItem>
                <MenuItem>
                  <em>XL</em>
                </MenuItem>
              </Select>
              {formik.touched.color && formik.errors.color && (
                <FormHelperText>{formik.errors.color}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                label="Category"
              >
                {/* <MenuItem>
                  <em>None</em>
                </MenuItem> */}

                {mainCategory.map((item) => (
                  <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.color}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category2-label">Second Category</InputLabel>
              <Select
                labelId="category2-label"
                id="category2"
                name="category2"
                value={formik.values.category2}
                onChange={formik.handleChange}
                label="Second Category"
              >
                {/* <MenuItem>
                  <em>None</em>
                </MenuItem> */}

                {formik.values.category &&
                  categoryTwo[formik.values.category]?.map((item) => (
                    <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                  ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.color}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category-label">Third Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category3"
                value={formik.values.category3}
                onChange={formik.handleChange}
                label="Third Category"
              >
                <MenuItem>
                  <em>None</em>
                </MenuItem>

                {formik.values.category2 &&
                  childCategory(
                    categoryThree[formik.values.category],
                    formik.values.category2
                  )?.map((item) => (
                    <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                  ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              sx={{ p: "14px" }}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              {false ? (
                <CircularProgress
                  size="small"
                  sx={{ width: "27px", height: "27px" }}
                />
              ) : (
                "Add Product"
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProduct;
