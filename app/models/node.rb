
class Node < ApplicationRecord
  has_many(:children,
  foreign_key: :parent_id,
  class_name: 'Node')
end
