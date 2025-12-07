-- Add image_url column to product_variations table
-- Run this in your Supabase SQL Editor

ALTER TABLE product_variations 
ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Verify the change
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'product_variations';
