import os
from PIL import Image

# Path to your portfolio images folder (relative to the root of your project)
DIRECTORY = 'public/img/portfolio'

# Maximum dimensions for the thumbnail (Width, Height). 
# .thumbnail() preserves the aspect ratio, so it will just scale the longest side to 800px.
MAX_SIZE = (800, 800)

def generate_thumbnails():
    if not os.path.exists(DIRECTORY):
        print(f"Directory not found: {DIRECTORY}. Please run this from your project root.")
        return

    # Scan the directory
    for filename in os.listdir(DIRECTORY):
        if filename.endswith('-large.jpg'):
            large_path = os.path.join(DIRECTORY, filename)
            
            # Swap the naming convention
            small_filename = filename.replace('-large.jpg', '-small.jpg')
            small_path = os.path.join(DIRECTORY, small_filename)
            
            try:
                # Open the original high-res image
                with Image.open(large_path) as img:
                    # Convert to standard RGB (fixes issues if the original has weird color profiles)
                    if img.mode != 'RGB':
                        img = img.convert('RGB')
                    
                    # Resize the image using high-quality downsampling
                    img.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)
                    
                    # Save it heavily compressed for fast website loading
                    img.save(small_path, 'JPEG', quality=75, optimize=True)
                    
                    print(f"✅ Successfully created: {small_filename}")
            
            except Exception as e:
                print(f"❌ Failed to process {filename}: {e}")

if __name__ == "__main__":
    print("Starting thumbnail generation...")
    generate_thumbnails()
    print("Finished processing all images!")