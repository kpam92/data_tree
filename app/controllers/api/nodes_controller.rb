require 'byebug'
class Api::NodesController < ApplicationController

  def index
    @nodes = Node.all
  end

  def show
    curr_search = params[:id].downcase
    @nodes = Node.where("path LIKE ? ", "%#{curr_search}%")
  end

  def node_path
    node = Node.find(params[:id])
    @results = [node.path]
    until node.parent_id.nil?
      node = node.parent
      @results.unshift(node.path)
    end
    byebug
    @results
  end

  def children
    @nodes = Node.find(params[:id]).children
  end
end
