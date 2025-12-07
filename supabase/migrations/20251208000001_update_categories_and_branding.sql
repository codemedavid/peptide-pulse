-- Update Category Names for peptalk.ph
-- Run this in your Supabase SQL Editor

-- Update existing category display names
UPDATE categories SET name = 'Peptides', icon = '🧬' WHERE id = 'injection-pens';
UPDATE categories SET name = 'Pen Needles' WHERE id = 'needles';
UPDATE categories SET name = 'Insulin Syringes' WHERE id = 'syringes';
UPDATE categories SET name = 'Cartridges', icon = '💊' WHERE id = 'accessories';

-- Add Peptide Pens category
INSERT INTO categories (id, name, icon, sort_order, active) VALUES
  ('peptide-pens', 'Peptide Pens', '💉', 2, true)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, icon = EXCLUDED.icon;

-- Update sort order: Peptides, Peptide Pens, Cartridges, Pen Needles, Insulin Syringes
UPDATE categories SET sort_order = 1 WHERE id = 'injection-pens';  -- Peptides
UPDATE categories SET sort_order = 2 WHERE id = 'peptide-pens';    -- Peptide Pens
UPDATE categories SET sort_order = 3 WHERE id = 'accessories';     -- Cartridges
UPDATE categories SET sort_order = 4 WHERE id = 'needles';         -- Pen Needles
UPDATE categories SET sort_order = 5 WHERE id = 'syringes';        -- Insulin Syringes

-- Update site settings
UPDATE site_settings SET value = 'peptalk.ph' WHERE id = 'site_name';
UPDATE site_settings SET value = 'Premium Peptides & Essentials' WHERE id = 'site_tagline';

-- Update payment methods brand name
UPDATE payment_methods SET account_name = 'peptalk.ph' WHERE account_name = 'HP GLOW';

-- Verify
SELECT id, name, icon, sort_order FROM categories WHERE active = true ORDER BY sort_order;